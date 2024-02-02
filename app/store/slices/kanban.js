// third-party
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null,
    columns: [],
    columnsOrder: [],
    comments: [],
    items: [],
    profiles: [],
    selectedItem: false,
    userStory: [],
    userStoryOrder: []
};

// ==============================|| SLICE - KANBAN ||============================== //

const slice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // ADD COLUMN
        addColumnSuccess(state, action) {
            state.columns = action.payload.columns;
            state.columnsOrder = action.payload.columnsOrder;
        },

        // EDIT COLUMN
        editColumnSuccess(state, action) {
            state.columns = action.payload.columns;
        },

        // UPDATE COLUMN ORDER
        updateColumnOrderSuccess(state, action) {
            state.columnsOrder = action.payload.columnsOrder;
        },

        // DELETE COLUMN
        deleteColumnSuccess(state, action) {
            state.columns = action.payload.columns;
            state.columnsOrder = action.payload.columnsOrder;
        },

        // ADD ITEM
        addItemSuccess(state, action) {
            state.items = action.payload.items;
            state.columns = action.payload.columns;
            state.userStory = action.payload.userStory;
        },

        // EDIT ITEM
        editItemSuccess(state, action) {
            state.items = action.payload.items;
            state.columns = action.payload.columns;
            state.userStory = action.payload.userStory;
        },

        // UPDATE COLUMN ITEM ORDER
        updateColumnItemOrderSuccess(state, action) {
            state.columns = action.payload.columns;
        },

        // SELECT ITEM
        selectItemSuccess(state, action) {
            state.selectedItem = action.payload.selectedItem;
        },

        // ADD ITEM COMMENT
        addItemCommentSuccess(state, action) {
            state.items = action.payload.items;
            state.comments = action.payload.comments;
        },

        // DELETE ITEM
        deleteItemSuccess(state, action) {
            state.items = action.payload.items;
            state.columns = action.payload.columns;
            state.userStory = action.payload.userStory;
        },

        // ADD STORY
        addStorySuccess(state, action) {
            state.userStory = action.payload.userStory;
            state.userStoryOrder = action.payload.userStoryOrder;
        },

        // EDIT STORY
        editStorySuccess(state, action) {
            state.userStory = action.payload.userStory;
        },

        // UPDATE STORY ORDER
        updateStoryOrderSuccess(state, action) {
            state.userStoryOrder = action.payload.userStoryOrder;
        },

        // UPDATE STORY ITEM ORDER
        updateStoryItemOrderSuccess(state, action) {
            state.userStory = action.payload.userStory;
        },

        // ADD STORY COMMENT
        addStoryCommentSuccess(state, action) {
            state.userStory = action.payload.userStory;
            state.comments = action.payload.comments;
        },

        // DELETE STORY
        deleteStorySuccess(state, action) {
            state.userStory = action.payload.userStory;
            state.userStoryOrder = action.payload.userStoryOrder;
        },

        // GET COLUMNS
        getColumnsSuccess(state, action) {
            state.columns = action.payload;
        },

        // GET COLUMNS ORDER
        getColumnsOrderSuccess(state, action) {
            state.columnsOrder = action.payload;
        },

        // GET COMMENTS
        getCommentsSuccess(state, action) {
            state.comments = action.payload;
        },

        // GET PROFILES
        getProfilesSuccess(state, action) {
            state.profiles = action.payload;
        },

        // GET ITEMS
        getItemsSuccess(state, action) {
            state.items = action.payload;
        },

        // GET USER STORY
        getUserStorySuccess(state, action) {
            state.userStory = action.payload;
        },

        // GET USER STORY ORDER
        getUserStoryOrderSuccess(state, action) {
            state.userStoryOrder = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

export const {
    getColumnsSuccess,
    getColumnsOrderSuccess,
    getCommentsSuccess,
    getProfilesSuccess,
    getItemsSuccess,
    getUserStorySuccess,
    getUserStoryOrderSuccess,
    addColumnSuccess,
    editColumnSuccess,
    updateColumnOrderSuccess,
    deleteColumnSuccess,
    addItemSuccess,
    editItemSuccess,
    updateColumnItemOrderSuccess,
    selectItemSuccess,
    addItemCommentSuccess,
    deleteItemSuccess,
    addStorySuccess,
    editStorySuccess,
    updateStoryOrderSuccess,
    updateStoryItemOrderSuccess,
    addStoryCommentSuccess,
    deleteStorySuccess,
    hasError
} = slice.actions;
