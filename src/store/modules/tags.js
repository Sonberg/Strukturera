import * as Vuexfire from 'vuexfire';
import moment from 'moment';
import { tagsRef } from '@/firebase';


export default {
        state: {
            tags: []
        },
        mutations: {
            createTags(state, data) {
                tagsRef.add(data);
            },
            setTags(state, { id, data }) {
                tagsRef.doc(id).set(Object.assign(data, { created: moment().format() }));
            },
            updateTags(state, { id, data }) {
                tagsRef.doc(id).update(Object.assign(data, {
                    updated: moment().format()
                }));
            },
            deleteTags(state, id) {
                tagsRef.doc(id).delete();
            }
        },
        getters: {
            tags: state => state.tags,
            tagsIn: state => ids => state.tags.filter(x => ids.indexOf(x.id) > -1),
            tags: state => id => state.tags.find(x => x.id == id)
        },
        
        actions: {
            initTags: Vuexfire.firebaseAction(({
                bindFirebaseRef
            }, ref) => {
                bindFirebaseRef('tags', ref)
            })
        }
    }