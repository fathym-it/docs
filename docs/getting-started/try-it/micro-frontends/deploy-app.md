---
title: Getting Started - Try It - Micro-Frontends - Deploy App
hide_title: true
sidebar_label: Deploy App
---

# Deploy Applications

As part of the initial setup process, we configured the Application Flow LCU for you.  This LCU will support you in managing your enterprise applications and making them available to your users.  There are multiple ways to get your application code hosted, here we'll focus on leveraging a publically available package to retrieve the contents of our application and host it on a specific route.

If you leveraged the IoT Starter template, your IDE will look something like this, with a number of applications and LCUs already preconfigured.

![IDE Application Flow IoT Starter](/img/screenshots/ide-app-flow-iot-starter.png)

If you don't see the Application Flow, or for more information on how it was configured read here (the application flow LCU package is available at @napkin-ide/lcu-data-apps-lcu).

## Open the Application Flow Blade

To open your Application Flow blade, click on the globe icon in the activity bar to open the Application Orchestration side bar. 

![IDE Activity Bar Application Orchestration](/img/screenshots/ide-activity-bar-app-orch.png)

Next select 'Applications > Application Flow' to open the management blade.

![IDE Activity Bar Application Orchestration](/img/screenshots/ide-side-bar-app-orch-app-flow.png)

A new blade will open in your IDE (as shown above) that will allow you to manage your enterprise applications.

## Create a New Application

To get started, we'll deploy an existing application.  If you selected the IoT Starter template, charts and freeboard are already installed.  Here we'll install the @fathym-it/hello-world-demo package on a new /hello-world route of our domain.  With your Application Flow blade open, lets start by clicking the Create New button.

![IDE Application Flow Create New Button](/img/screenshots/ide-app-flow-create-new-button.png)

This will open up a new form that will allow you to create a new application for your LCU Runtime.

### Application Details

One way to use our application orchestration tools is to bring your frontend applications online.  The application name and description are largely for your own internal use, to keep track of the applications you bring to life, for this example lets enter 'Hello World' for the name and description.  For our path, we are configuring a route on our domain that will be handled by the application we configure, let's set our path to /hello-world for this example.

![IDE Application Flow Create New](/img/screenshots/ide-app-flow-create-new-details.png)

### Application Config

When creating a new application, you'll have a number of different options in terms of the Application Type.

![IDE Application Flow Create Type Options](/img/screenshots/ide-app-flow-create-new-type-options.png)

Here we'll select the NPM Package View application type, and set it up to point at an open source hello world application.  Set the NPM Package to '@fathym-it/hello-world-demo' and the Package Version to 'latest'.  Leave the state config alone for now, so it should just be '{}'.

![IDE Application Flow Create NPM Package View](/img/screenshots/ide-app-flow-create-new-npm-package-view.png)

### Application Security

By default, your application will be made available to the public, alternatively you can require that a user login to the platform or even specify certain levels of access required to see different applications.  We'll dig more into this security model later, for now lets leave this open to the public.

![IDE Application Flow Create Not Secure](/img/screenshots/ide-app-flow-create-new-not-secure.png)

With everything configured, click save and your new application will be created.

## Try it

Once completed, you'll be taken back to the path view, where you'll see your new /hello-world path.

![IDE Application Flow Create Hello World](/img/screenshots/ide-app-flow-create-new-hello-world-tile.png)

 Next click the settings icon on the hello world tile, and you'll be taken into the application flow for that path.  Once there, you can click the launch icon to see the hello world app running.

![IDE Application Flow Create Hello World Application Flow](/img/screenshots/ide-app-flow-create-new-hello-world-app-flow.png)

## Next Steps

In addition to retrieving your packages from an NPM package (on a public or private feed), we support the ability to get your application files deployed via zip, direct git connections, and even real-time dev streams.  Choose the deployment strategy that is right for you, your project and the team.
