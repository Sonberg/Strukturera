import * as Vuexfire from 'vuexfire';
import moment from 'moment';
import {
    stepsRef
} from '@/firebase';


export default {
    state: {
        steps: []
    },
    getters: {
        steps: state => state.steps,
        stepsForProject: state => id => state.steps.filter(x => x.project_id == id),
        step: state => id => state.steps.find(x => x.id == id)
    },
    mutations: {
        createStep(state, data) {
            stepsRef.add(Object.assign(data, {
                order: state.steps.length,
                created: moment().format()
            }));
        },
        setStep(state, {
            id,
            data
        }) {
            stepsRef.doc(id).set(data);
        },
        updateStep(state, {
            id,
            data
        }) {
            stepsRef.doc(id).update(Object.assign(data, {
                updated: moment().format()
            }));
        },
        deleteStep(state, id) {
            stepsRef.doc(id).delete();
        }
    },
    actions: {
        initSteps: Vuexfire.firebaseAction(({
            bindFirebaseRef
        }, ref) => {
            bindFirebaseRef('steps', ref.orderBy('order'))
        })
    }
}