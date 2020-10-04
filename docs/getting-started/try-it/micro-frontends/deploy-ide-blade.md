---
title: Getting Started - Try It - Micro-Frontends - Deploy IDE Blade
hide_title: true
sidebar_label: Deploy IDE Blade
---

# Configure IDE Blade

The Fathym Napkin IDE is a micro-frontend host application that can load web components and iframes to deliver your modular user experiences.  We'll show you in this guide how to deploy the Fathym Forecast management blades and demo app into your IDE.

Ensure your Application Flow blade is open (see this article for [instructions](deploy-app) on how), and then we'll walk you through installing the Fathym Forecast blade.

## Manage Low Code Units

To get started, select the setting link in the 'Low Code Units' tile from the System Application Paths section.  

![IDE Application Flow LCU Tile](/img/screenshots/ide-app-flow-lcu-tile.png)

This will open the manager for your Low Code Units.  Next, select the create new button in the top right.

![IDE Application Flow Create New Button](/img/screenshots/ide-app-flow-create-new-button.png)

Now we are presented with a create form as before, except this one is locked into our Low Code Unit type.  Again, the application name and description are largely for your own internal use, to keep track of the applications you bring to life, for this example lets enter 'Fathym Forecast' for the name and description.  The path for our LCU isn't shwn for this type, and will be calculated based off of the lookup value and a path root of '/_lcu/'.  For the lookup, set the value to 'lcu-fathym-forecast-lcu'.

Set the NPM Package to '@habistack/lcu-fathym-forecast-lcu' and the Package Version to 'latest'.  Once again, we'll leave the security set to public.

![IDE Application Flow Create Forecast LCU Details](/img/screenshots/ide-app-flow-create-new-forecast-lcu-details.png)

Once we click save, our LCU will be added to the system and we can configure it for use in our IDE.

## Configure LCU Capabilities

Now that we have our new LCU in the system, we first need to decide which of its capabilities to include.  To do this, select the main settings link in the bottom left of your IDE.

![IDE Activity Bar Settings](/img/screenshots/ide-activity-bar-settings.png)

This will open the IDE Settings window and allow you to customize your IDE.  To configure the Forecast LCU, click on the drop down and select lcu-fathym-forecast-lcu from the list.  This will show you which LCUs are available from the package, and allow you to enable them for your enterprise.

![IDE Settings Configure Forecast](/img/screenshots/ide-settings-configure-forecast.png)

## Setup IDE

## Try It

## Next Steps
