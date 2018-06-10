import * as Vuexfire from 'vuexfire';
import moment from 'moment';
import { projectsRef } from '@/firebase';

export default {
        state: {
            projects: [],
        },
        getters: {
            projects: state => state.projects,
            project: state => id => state.projects.find(x => x.id == id)
        },
        mutations: {
            createProject(state, data) {
                projectsRef.add(Object.assign(data, {
                    order: state.steps.length,
                    created: moment().format()
                }));
            },
            setProject(state, { id, data }) {
                projectsRef.doc(id).set(data);
            },
            updateProject(state, { id, data }) {
                projectsRef.doc(id).update(Object.assign(data, {
                    updated: moment().format()
                }));
            },
            deleteProject(state, id) {
                projectsRef.doc(id).delete();
            }
        },
        actions: {
            initProjects: Vuexfire.firebaseAction(({
                bindFirebaseRef
            }, ref) => {
                bindFirebaseRef('projects', ref)
            })
        }
    }