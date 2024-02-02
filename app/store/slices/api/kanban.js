// project imports
import { dispatch } from 'store';
import axios from 'utils/axios';
import {
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
} from '../kanban';

// ==============================|| KANBAN API ||============================== //

export function getColumns() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/columns');
            dispatch(getColumnsSuccess(response.data.columns));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getColumnsOrder() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/columns-order');
            dispatch(getColumnsOrderSuccess(response.data.columnsOrder));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getComments() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/comments');
            dispatch(getCommentsSuccess(response.data.comments));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getProfiles() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/profiles');
            dispatch(getProfilesSuccess(response.data.profiles));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getItems() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/items');
            dispatch(getItemsSuccess(response.data.items));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getUserStory() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/userstory');
            dispatch(getUserStorySuccess(response.data.userStory));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function getUserStoryOrder() {
    return async () => {
        try {
            const response = await axios.get('/api/kanban/userstory-order');
            dispatch(getUserStoryOrderSuccess(response.data.userStoryOrder));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function addColumn(column, columns, columnsOrder) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/add-column', {
                column,
                columns,
                columnsOrder
            });
            dispatch(addColumnSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function editColumn(column, columns) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/edit-column', {
                column,
                columns
            });
            dispatch(editColumnSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function updateColumnOrder(columnsOrder) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/update-column-order', {
                columnsOrder
            });
            dispatch(updateColumnOrderSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function deleteColumn(columnId, columnsOrder, columns) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/delete-column', {
                columnId,
                columnsOrder,
                columns
            });
            dispatch(deleteColumnSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function addItem(columnId, columns, item, items, storyId, userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/add-item', {
                columnId,
                columns,
                item,
                items,
                storyId,
                userStory
            });
            dispatch(addItemSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function editItem(columnId, columns, item, items, storyId, userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/edit-item', {
                items,
                item,
                userStory,
                storyId,
                columns,
                columnId
            });
            dispatch(editItemSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function updateColumnItemOrder(columns) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/update-item-order', {
                columns
            });
            dispatch(updateColumnItemOrderSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function selectItem(selectedItem) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/select-item', {
                selectedItem
            });
            dispatch(selectItemSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function addItemComment(itemId, comment, items, comments) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/add-item-comment', {
                items,
                itemId,
                comment,
                comments
            });
            dispatch(addItemCommentSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function deleteItem(itemId, items, columns, userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/delete-item', {
                columns,
                itemId,
                userStory,
                items
            });
            dispatch(deleteItemSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function addStory(story, userStory, userStoryOrder) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/add-story', {
                userStory,
                story,
                userStoryOrder
            });
            dispatch(addStorySuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function editStory(story, userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/edit-story', {
                userStory,
                story
            });
            dispatch(editStorySuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function updateStoryOrder(userStoryOrder) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/update-story-order', {
                userStoryOrder
            });
            dispatch(updateStoryOrderSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function updateStoryItemOrder(userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/update-storyitem-order', {
                userStory
            });
            dispatch(updateStoryItemOrderSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function addStoryComment(storyId, comment, comments, userStory) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/add-story-comment', {
                userStory,
                storyId,
                comment,
                comments
            });
            dispatch(addStoryCommentSuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}

export function deleteStory(storyId, userStory, userStoryOrder) {
    return async () => {
        try {
            const response = await axios.post('/api/kanban/delete-story', {
                userStory,
                storyId,
                userStoryOrder
            });
            dispatch(deleteStorySuccess(response.data));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}
