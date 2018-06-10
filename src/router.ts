import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Project from "@/views/Project.vue";
import Projects from "@/views/Projects.vue";
import Story from "@/views/Story.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/projects/:projectId",
      name: "project",
      component: Project,
      children: [
        {
          path: "stories/:storyId",
          name: "story",
          component: Story,
        }
      ]
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
