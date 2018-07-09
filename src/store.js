const state = {
    memos: []
}

const debug = process.env.NODE_ENV !== 'production'

const actions = {
    addMemo( newMemo ) {
        debug && console.log(`addMemo triggered with`, newMemo)
        // memosの中で一番大きいidに1を足した値を取得する
        newMemo.id = state.memos.reduce((id, memo) => {
            return id < memo.id ? memo.id : id
        }, 0) + 1
        state.memos.push(newMemo)
    },
    removeMemo(id) {
        debug && console.log(`removeMemo triggered with`, id)
        const targetId = parseInt(id, 10)
        // memosの中からidが一致するメモのindexを取得する
        const index = util.findIndex(state.memos, id)
        state.memos.splice(index, 1)
    },
    updateMemo(memo) {
        debug && console.log(`updateMemo triggered with`, memo)
        const targetId = parseInd(memo.id, 10)
        // memosの中からidが一致するメモのindexを返す
        const index = util.findIndex(state.memos, id)
        state.memos.splice(index, 1, memo)
    }
}

const util = {
    // memos の中からidが一致するメモの index を返す
    findIndex(memos, id) {
        const targetId = parseInt(id, 10)
        return memos.findIndex((memo) => {
            return memo.id === targetId
        })
    }
}

export default {
    state,
    actions
}