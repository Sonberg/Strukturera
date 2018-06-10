import Vue from "vue";
import Vuex from "vuex";
import * as Vuexfire from 'vuexfire';

import projects from './modules/projects';
import stories from './modules/stories';
import steps from './modules/steps';
import tags from './modules/tags';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  mutations: Vuexfire.firebaseMutations,
  modules: { projects, stories, steps, tags }
});

function indexOfProp(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}



/*
  state: {
    projects: [
      {
        id: 0,
        name: "Översikt"
      }
    ],
    steps: [{
      id: 0,
      project_id: 0,
      order: 0,
      name: 'Introduktion',
      image: "https://source.unsplash.com/random"
    },
    {
      id: 1,
      project_id: 0,
      order: 1,
      name: 'How to',
      image: "https://source.unsplash.com/random",
      stories: [

      ]
    }],
    stories: [
      {
        id: 0,
        project_id: 0,
        step_id: 0,
        order: 0,
        tags: [0, 2],
        name: "Välkommen",
        content: "",
        fixed: false
      },
      {
        id: 1,
        project_id: 0,
        step_id: 0,
        tags: [2],
        order: 1,
        name: "Välkommen 2",
        content: "",
        fixed: false
      },
      {
        id: 2,
        project_id: 0,
        step_id: 1,
        order: 2,
        name: "Create content",
        content: "",
        fixed: false
      },
      {
        id: 3,
        project_id: 0,
        step_id: 1,
        tags: [0, 1],
        order: 0,
        name: "Create content 2",
        content: "",
        fixed: false
      }
    ],
    tags: [
      {
        id: 0,
        name: 'UX/AD',
        color: '#ffb142'
      },
      {
        id: 1,
        name: 'Frontend',
        color: '#706fd3'
      },
      {
        id: 2,
        name: 'Backend',
        color: '#ff5252'
      }
    ],
    settings: {
      showTextOnTags: false
    }
  },
mutations: {
    delete() {

    },
    create(state, data) {
      state.projects.push({
        id: state.projects.length,
        ...data
      });
    },
    setProject(state, data) {
      let index = indexOfProp(state.projects, "id", data.id);

      if (index != -1) {
        state.projects[index] = data;
      }
    },
    setStep(state, data) {
      let index = indexOfProp(state.steps, "id", data.id);
      if (index != -1) {
        state.steps[index].order = data.order;
      }
    },
    addStep(state, data) {
      state.steps.push(Object.assign(data, {
        id: state.steps.length,
        order: state.steps.length
      }));
    },
    setStory(state, data) {
      let index = indexOfProp(state.stories, "id", data.id);
      if (index != -1) {
        state.stories[index].order = data.order;
      }
    },
    addStory(state, data) {
      state.stories.push(Object.assign(data, {
        id: state.stories.length,
        order: state.stories.length
      }));
    },
    setSettings(state, data) {
      state.settings = Object.assign(state.settings, data);
    }

  },
  getters: {
    projects: state => state.projects.sort(order),
    project: state => (id: Number) => state.projects.find(x => x.id == id),

    steps: state => state.steps.sort(order),
    step: state => (id: Number) => state.steps.find(x => x.id == id),

    stories: state => state.stories.sort(order),
    story: state => (id: Number) => state.stories.find(x => x.id == id),

    tags: state => state.tags,
    settings: state => state.settings
  },
  actions: {}*/