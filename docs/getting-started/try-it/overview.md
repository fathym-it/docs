---
title: Getting Started Journeys
sidebar_label: Overview
slug: /getting-started/try-it
---

During Fathym's setup process, we prepared some starting point best practices for your infrastructure, DevOps, and application orchestration (check out our guide, for a [detailed explanation](enterprise-setup-explained)).  This portion of the getting started guide will take you through some of the basics, and proide you some ways to dig in further.

<!-- 
Some context on what was setup... DevOps, Azure resources, LCU Runtime, default micro-apps and pre-conifgured microapps

Summarize where we'll start, what we'll accomplish, and where we'll end...

Deafult apps relate to enterprise whitelabeling -->

## What is a Journey?

Throughout the process of working with the Fathym Framework, you will be preseented with journeys that will help guide you through learning new skills and tools to help get your job done.  Journeys are a way for us to organize those efforts, and in the future you will be able to create custom journeys.

## Micro-Frontends Journey

As mentioned, an application orchestration environment has been setup, and the [LCU Runtime](../developers/applications/runtime) will support a release strategy for your cloud-native applications.  In this journey, we'll deploy existing applications and LCUs, customize them and create our own with the Fathym [LCU CLI](../developers/applications/cli).

[Try out](try-it/micro-frontends) Fathym Framework micro-frontends now.  Not sure what a micro-frontend is?  Check out our guide on [micro-frontends](../developers/applications/micro-frontends) for more information.  

### Deploy Existing LCU Applications

During setup, we started you with a series of applications to boot your environment (IDE and Settings apps).  In addition, we have various default applications in the open source that we have already wrapped and prepared for simple use in Fathym (Freeboard, Docusuaurus).  For information on implementing your favorite open source tools in LCUs for the enterprise, read our guide.  Looking to monetize your work?  Follow this guide to leverage Fathym to create paid for offerings.

[Deploy an existing app](try-it/micro-frontends/deploy-app) on Fathym Framework now.

### Deploy LCUs as IDE Blades

When setting up your environment, we went ahead and added a couple of default IDE blades as well.  These blades provide a low code / no code way of orchestrating applications (Application Flow LCU) across domains and leveraging your deployed cloud infrastructure (Data Flow LCU).  Here we'll walk you through adding additional blades (Fathym Forecast LCUs) and programming your IDE.

[Deploy an existing IDE blade](try-it/micro-frontends/deploy-ide-blade) on Fathym Framework now.

### Customize Existing Applications

Fork, customize, release... Github setup link, npm setup link, organization setup across both setups... (all one article... maybe exists already)...

[Customize existing applications](try-it/micro-frontends/customize-app) on Fathym Framework now.

### Create Custom LCUs with the CLI

LCUs can be standalone applications of any size, or small building blocks like web components or standalone javascript (see more on micro-frontends design patterns) to compose larger experiences.  

[Create custom LCUs](try-it/micro-frontends/create-deploy-custom-lcu) on Fathym Framework now.

## IoT Starter Journey

In addition to the application orchestration capabilites, when selecting the IoT starter template you get a functioning IoT workflow to begin working with.  This will allow you to rapidly support custom data ingest, data transform, data storage, and visualization.  Understanding and seeing your data is the first step in a journey towards successful IoT.

[Try out](try-it/iot) Fathym Framework IoT starter now.

### Emulated Data Flow

### Visualizing Your Data

Freeboard, Power BI, Fathym App Composer (Future Fathym Classic)

### Sending Custom IoT Data

### Working with ML/AI
