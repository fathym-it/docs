---
title: Getting Started
hide_title: true
sidebar_label: Setup
slug: /gettings-started
---

# Fathym Account Setup

It enables developers to rapidly build data-driven applications by applying best practice workflows for cloud infrastructure automation and application management.

In this getting started guide, we'll walk you through creating an automated, enterprise-grade, Azure-hosted environment with just a few clicks.  To kick things off, register and select a [Starter or Pro](https://www.fathym-it.com/billing/lcu) package.  Once registered we'll help you setup the following to get you going:

- Infrastructure
  - Enterprise-scalable, cost-effective Azure cloud
  - Manage clouds, and legacy infrastructure with enterprise orchestration tools
- DevOps
  - Connects with your Azure DevOps instance and assists managing your code, builds, releases, and more
  - Automate DevOp operations with application release/deployment and version management
  - Sets up Git-based source control for your infrastructure and connect it to builds for auto-deploying to Azure
- Applications
  - Secured application hosts with Let's Encrypt
  - Provide best practices in building essential data flows and cloud storage
  - Maximize reusability and save time in data application development

For setups that would like a hybrid-cloud without Azure connectivity, please visit [Starting without Azure](guides/starting-without-azure)

## Enterprise Details

With the Frathym Framework, everything starts from your enterprise.  Whether a one man show, or a dev team, your enterprise will allow you to create infrastructure, manage devops and deploy applications.  We'll start you on a domain within our control, and provide you the journeys to run on your own domains and even white-label our framework and practices for your end users.

![Workspace Setup - Workspace Details](/img/screenshots/workspace-setup-workspace-details.png)

**Workspace Name** Enter the name of the Enterprise Workspace.  Many organizations only ever need a single workspace, and this can be named after your company.

**Workspace Lookup** The lookup will be used to identify your Fathym Framework environment, and to uniquely identify and group the resources provisioned.   (Required to contain 3 - 12 charaters, lowercase characters a-z with '-' and numbers 0-9. A '-' may not start or end the value.)

## Azure Connection

Before setting up the Fathym Framework you will need to set up a Microsoft account for your organization so Fathym can connect with Microsoft Azure. This way everything you create in Fathym is provisioned in your own Azure infrastructure, meaning you maintain all ownership and we don't lock you in.  Next we'll walk you through collecting the following information.

![Workspace Setup - Azure Connection](/img/screenshots/workspace-setup-azure-connection.png)

:::note

Azure charges you incur will be billed back to you. If you are setting up a new Azure account, you will get a $200 credit to use within 30 days, as well as 12 months of many services for free.

:::

:::important

In order to have access to the necessary permissions and settings required for setup in Azure, your Azure account needs to be at the administrator level.

:::

### Create a New Azure Registration

- From the Azure portal, select Azure Active Directory.
- From the left menu pane, select App registrations, then click +New Registration.
- On Register an application, complete the following fields:
  - Name
    - This is your Display Name value.
  - Supported Account Types
    - Select the Accounts in this organizational directory only option.
  - Redirect URI
    - Enter a web value, for example, https://www.yourcompany.com.
  - Click Register.
- Close this pane using the X in the upper-right corner. Your application should display on the App registrations page under the Owned Applications tab.

### Generate an App Auth Key

To generate the value for the Azure App Auth key:

- From the left menu pane of your organization’s App Registration page in Azure, select Certificates & secrets.
  - A client secret is an alphanumeric string Azure uses to verify its identity when requesting a token.
- In the Client secrets section, click + New client secret.
- Enter a useful description, specify the expiration date, then click Add.
  - Example description: Fathym Platform Key.

![Workspace Setup - Azure App Auth Key](/img/screenshots/workspace-setup-azure-app-auth-key.png)

### Set Up an Azure Contributor Role

You will need to connect your Azure registration with your account.

- From the Azure portal home page, select Subscriptions. Alternatively, you can type subscriptions in the search box at the top of the page.
- On the Subscriptions page, select a valid subscription for your organization.

![Workspace Setup - Azure Contributor Role](/img/screenshots/workspace-setup-azure-contributor-role.jpg)

- On the left pane menu, select Access control (IAM).
- On the Access control (IAM) page, select the Role assignments tab.
- Click + Add, then select Add role assignment.
- On the Add role assignment pane on the right, select Contributor for the Role field.
- Select Azure AD user, group, or service principal for the Assign access to field.
- Select the registration you created in the previous section for the Select field.
- Click Save.

You should see a banner popup confirming the role assignment, and the new contributor you added should display on the main section of the screen.

### Locate Your Azure App ID and Azure Tenant Credentials

![Workspace Setup - Azure App ID & Tenant](/img/screenshots/workspace-setup-azure-app-id-tenant.png)

- From the [Azure portal](https://portal.azure.com/), select Azure Active Directory.
- From the left menu pane, select App registrations.
- Under Display Name, select your organization.
- Hover over each value to invoke the copy function.
- Paste the value of each ID to its corresponding field on Fathym’s Microsoft Azure Subscription Setup form.

### Locate Your Azure Subscription ID Credentials

![Workspace Setup - Azure Subscription ID List](/img/screenshots/workspace-setup-azure-sub-id-list.jpg)

- From the [Azure portal](https://portal.azure.com/), select Subscriptions.
- This will list out the Subscription Names along with the Subscription ID.
- Alternatively, the Subscription ID can be located on the Overview tab after selecting Subscriptions.

![Workspace Setup - Azure Subscription ID Overview](/img/screenshots/workspace-setup-azure-sub-id-overview.jpg)

- Hover over the Subscription ID to invoke the copy function.
- Paste the value of the ID to its corresponding field on Fathym’s Microsoft Azure Subscription Setup form.

### Locate Your Azure App Auth Key

- To retrieve the Azure App Auth key value from Azure, go to the left menu pane of your organization’s App Registration page, then select Certificates & secrets.
- Locate your client secret and hover over the alphanumeric value to invoke the copy function.
- Paste the new value in the Azure App Auth key field in Fathym.

:::note

Once you copy the secret’s value it is not retrievable again.

:::

### Choose Your Infrastructure Template

![Workspace Setup - Choose Infrastructure](/img/screenshots/workspace-setup-choose-infrastructure.png)

- Choose your server location
- Choose your Infrastructure Template
  - The Low Code Unit Runtime Template installs all of the Azure resources that are required to run the Fathym Framework and is sufficient for building and hosting applications and APIs.
  - The Low Code Unit Runtime Template w/ IoT installs all of the above and will provision the infrastructure to connect devices and real-time data flows, enabling Internet of Things (IoT) projects. This includes the initial best practice Data Flow resources, like an IoT Hub, Event Hub, Cold Storage, Warm Storage, and Hot Storage.
- Click Review and Launch

## Launch your Automated Best Practice Environment

Once you've reviewed your setup, click to Finalize and Deploy your Workspace.

![Workspace Setup - Finalize & Deploy](/img/screenshots/workspace-setup-finalize-deploy.png)

With Fathym, you can quickly and easily set up a best practice cloud infrastructure environment..  Here you'll be able to deploy the tools and solutions of your choosing, like our application orchestration and data flow management LCUs. With just a few clicks, Fathym sets you up a cloud-native enable Azure cloud environment, so it is always accessible and always yours.

Fathym offers two infrastructure template options. The Low Code Unit Runtime Template installs the Azure resources that are required to run the Fathym Low-Code Framework and host, manage and deploy applications and APIs. The Low Code Unit Runtime Template w/ IoT installs all the above and will provision the infrastructure to connect devices and real-time data flows, enabling IoT projects. This includes the initial best practice data flow resources, like an IoT Hub, Event Hub, Cold Storage, Warm Storage, and Hot Storage.

Having selected the infrastructure template that is right for you, in 15 minutes or less Fathym will automate your enterprise–ready cloud environment while you kick back and have a beer.

The video below compares configuring these resources in Fathym versus the Azure portal, which is tedious and time consuming for even the most seasoned Azure user. To see just how simple this process is with Fathym, check out this video:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/UTUD4kBfEBo" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Re-write this to another page under developers and link to it... [Fathym Support Explained](https://support.fathym.com/docs/en/registration)

## Next Steps

There are a number of ways to leverage your LCU Runtime once complete, and for this guide we'll focus on leveraging the Fathym LCU CLI to create and deliver your first micro-frontends (one standalone app and one IDE blade).  If this isn't what your looking to accomplish, once your IDE is ready, you'll be greeted with a number of developer journeys to get you started.

### Try Micro-Frontends

### Try IoT

### Where to go from here?
