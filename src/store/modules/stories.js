import * as Vuexfire from 'vuexfire';
import moment from 'moment';
import { storiesRef } from '@/firebase';

export default {
    state: {
        stories: []
    },
    getters: {
        stories: state => state.stories,
        storiesForStep: state => id => state.stories.filter(x => x.step_id == id),
        story: state => id => state.stories.find(x => x.id == id)
    },
    mutations: {
        createStory(state, data) {
            storiesRef.add(Object.assign(data, { order: state.stories.length, created: moment().format(), content: '' }));
        },
        setStory(state, { id, data }) {
            storiesRef.doc(id).set(data);
        },
        updateStory(state, { id, data }) {
            storiesRef.doc(id).update(Object.assign(data, {
                updated: moment().format()
            }));
        },
        deleteStory(state, id) {
            storiesRef.doc(id).delete();
        }
    },
    actions: {
        initStories: Vuexfire.firebaseAction(({
            bindFirebaseRef
        }, ref) => {
            bindFirebaseRef('stories', ref.orderBy('order'))
        })
    }
}