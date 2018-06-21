<template>
    <div class="editor-view">
        <div v-if="memo">
            <label>id:</label>
            <input v-model="input.id" disabled>
        </div>
        <div>
            <label>Content:</label>
            <input v-model="input.text" placeholder="title">
        </div>
        <div>
            <label>Date:</label>
            <input v-model="input.date" type="date">
        </div>
        <div>
            <label>Tags:</label>
            <input v-model="input.tags" placeholder="separate by a space.">
        </div>
        <div>
            <button @click="cancel">戻る</button>            
            <button @click="save">保存</button>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            memo: Object
        },
        data(){
            return {
                input:{
                    text:'',
                    date:'',
                    tags:''
                }
            }
        },
        created() {
            this.setMemo()
        },
        watch: {
            memo: 'setMemo'
        },
        computed: {
            tagsArr() {
                // input.tags の文字列を空白で区切って配列に変換する
                return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
            }
        },
        methods: {
            save() {
                // this.input のクローンを生成する
                const data = Object.assign({}, this.input, {tags: this.tagsArr});
                // 'add'イベントを自身にトリガーする
                this.$emit('add', data);
            },
            setMemo() {
                if (this.memo) {
                    Object.assign( this.input, this.memo, {tags: this.memo.tags.join(' ')} )
                }
            },
            cancel() {
                this.$emit('cancel');
            }
        }
    }
</script>