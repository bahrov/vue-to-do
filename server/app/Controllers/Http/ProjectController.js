"use strict";

const Project = use("App/Models/Project");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    console.log(user.id);
    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    console.log(user);
    const { title } = request.all();
    console.log(title);
    const project = new Project();
    project.title = title;
    await user.projects().save(project);
    return project;
  }
}

module.exports = ProjectController;
