var store = [{
        "title": "What is Cocktail?",
        "excerpt":"Cocktail is an all-in-one container management platform. As the use of cloud computing became widespread, there has been a growing demand for infrastructure and application service management. This can be attributed to the limitations in utilizing the advantages of the cloud with past development and operations methods. In the applications...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.0/",
        "teaser":null},{
        "title": "Cocktail Structure Overview",
        "excerpt":"Cocktail is comprised of five layers that correspond to its various roles. Cluster Management Layer: Responsible for infrastructure (cluster), where containers are deployed/executed, and orchestration. Kubernetes (https://kubernetes.io) handles orchestration and provides scaling management functions such as infrastructure management and monitoring. Service Management Layer: Responsible for container configuration and management based...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer",
        "excerpt":"The cluster management layer is divided into the infrastructure, which consists of clusters, and the container orchestration engine. The detailed configuration is as follows: Cocktail automatically provisions the cluster infrastructure and orchestration engine according to user configuration. The tool responsible for this is Cube. Cube constitutes high-availability (HA) Kubernetes clusters....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.2/",
        "teaser":null},{
        "title": "Service Management Layer",
        "excerpt":"In general, a single application or service consists of multiple containers. In particular, an orchestration engine such as Kubernetes requires additional objects such as a service port, controller, and storage volume in addition to the container. Therefore, to manage container-based applications and services, an abstraction unit is required to package...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.3/",
        "teaser":null},{
        "title": "Pipeline Layer",
        "excerpt":"The pipeline layer automates container building and deployment from code. The build step performed tasks (code download, build/test) and container image building sequentially based on user settings. Tasks use containers that perform tasks internally and can be scaled using public or user-created containers in addition to the default containers. Built...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.4/",
        "teaser":null},{
        "title": "Catalog Layer",
        "excerpt":"Containers implement deployments by creating images from configurations. Therefore, repetitive tasks can be minimized and frequently-used DBs and middleware runtime can be easily deployed whenever needed by creating templates of container images and deployment information. The catalog layer is responsible for creating and managing these templates. The following diagram shows...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.5/",
        "teaser":null},{
        "title": "Dashboard Layer",
        "excerpt":"The dashboard layer provides service status, monitoring, and cluster status information via a web-based UI. The dashboard provides role-specific views according to user privileges. Cocktail user privileges are as follows: Administrator : The admin manages clusters and has administrative privileges on all Cocktail services. DevOps: Have administrative privileges only for...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.6/",
        "teaser":null},{
        "title": "1.Login",
        "excerpt":"Below is the initial Cocktail login screen. You can log in after entering the System, ID, and password. (Contact the administrator for ID information.) The password must be changed when first connecting or initializing the password. You can change your password or extend your password even after 90 days have...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/1/",
        "teaser":null},{
        "title": "2.System Management",
        "excerpt":" You can manage the systems, clusters, and workspaces you need to use the cocktail cloud.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2/",
        "teaser":null},{
        "title": "2.1 System",
        "excerpt":"You can manage system information, account information, cloud metering accounts, and system users for system use. a) Left main menu → System System Information Description System name Cocktail cloud’s system name System connection account System Account for Cocktail Cloud Access User Auth Type Choose from PLAIN ID/PW or Azure Active...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1/",
        "teaser":null},{
        "title": "2.1.1 Edit system",
        "excerpt":"System information and account information necessary for using the system can be modified. a) Left main menu → System → Top right edit button You can modify system information (default language, user auth type, system logo, system description) and account information (organization name, account contact person, account contact email, address)....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 Register your cloud metering account",
        "excerpt":"  You can register your cloud metering account.   a) Left Main Menu → System → Account Registration                Amazon Web Service             Google Cloud Plalform       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 Edit your cloud metering account",
        "excerpt":"  You can edit your cloud metering account.   a) Click on Main Menu → System → Account Action Menu → Edit Account → Edit and modify button.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 Delete your cloud metering account",
        "excerpt":"  You can delete your cloud metering account.   a) Left Main Menu → System → Account Actions Menu → Delete Account    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.4/",
        "teaser":null},{
        "title": "2.1.5 Adding System Users",
        "excerpt":"It is a function to add a system user. Several administrators can be added and deleted, but one person can not be deleted. a) Click on Main Menu → System → Add User on the left. System Users Description Name System user name Id Cocktail Cloud Connect User ID Role...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.5/",
        "teaser":null},{
        "title": "2.1.6 Edit system users",
        "excerpt":" It is a function to edit system user information (name, description).   a) Click on Main Menu → System → User Action Menu → Edit User on the left.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.6/",
        "teaser":null},{
        "title": "2.1.7 Reset system user password",
        "excerpt":"  Cocktail Cloud is a function that initializes user password. (Initial password supplied after initialization is ‘Pass0000’. )   a)  Click Main Menu → System → User Action Menu → Initialize User Password on the left.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.7/",
        "teaser":null},{
        "title": "2.1.8 Delete system user",
        "excerpt":" It is a function to delete the system user.   a)  Click Main Menu → System → User Actions menu → Delete User on the left.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.8/",
        "teaser":null},{
        "title": "2.2 Cluster",
        "excerpt":"This feature provides cluster registration management functions, as well as monitoring, volume, alert, and metering services for each node and application. Cluster Menu Descrition Node Resource utilization (CPU, memory, and network) for all nodes and monitoring of individual nodes Application Resource utilization (CPU, memory, and network) for all applications and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2/",
        "teaser":null},{
        "title": "2.2.1 Add Cluster",
        "excerpt":"This feature allows you to add clusters. a) Cluster → Click the + Cluster registration button in the top-right corner. b) Enter provider information (account, type, and region). The input fields vary depending on the provider and account type. For bare-metal, a default value is assigned for the region and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.1/",
        "teaser":null},{
        "title": "2.2.10 Addon Managed",
        "excerpt":"It distributes, redistributes and manages Addon installed in the cocktail, and provides monitoring services for Addon status. a) Click Cluster → Select Cluster → Addon → Addon Name. You can inquire the information of the instance installed in the addon. ** Instance ** ** Information ** Instance Detailed Information, Status...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.10/",
        "teaser":null},{
        "title": "2.2.2 Edit Cluster",
        "excerpt":"  This feature allows you to modify a cluster’s basic information, including provider, monitoring status, and type. However, the provider account, type, ,region, ,project id, subscription id and cluster may not be changed.   a) Cluster → Select Cluster → Registration Management → Edit. Click the [Update] button when finished.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 Delete Cluster",
        "excerpt":"  This feature allows you to delete clusters. However, a cluster that is being used by an application map may not be deleted.   a) Cluster → Select Cluster → Registration Management → Click the [Delete] button.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.3/",
        "teaser":null},{
        "title": "2.2.4 Volume",
        "excerpt":"This feature allows you to add public cloud and external storage information and also provides volume monitoring. a) Cluster → Select Cluster → Volume. Storage Settings Description [+] button Redirects to Add Storage page Name Name of storage (user-defined) Type Type of storage (NFS/EBS/Google Persistent Disk/Azure Disk) Storage Class Name...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.4/",
        "teaser":null},{
        "title": "2.2.5 Add Storage",
        "excerpt":"This feature allows you to add storage volumes. a) Cluster → Select Cluster → Select Volume → Click the [+] button in the top-right corner. b) Fill in the cluster, name, description, storage plug-in, policy, storage class name, storage provisioner, or plug-in settings. Storage Info Description Name PV name Description...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.5/",
        "teaser":null},{
        "title": "2.2.6 Edit Storage",
        "excerpt":"  This feature allows you to modify storage information. Note, however, that NFS Named storages may not be modified.   a) Cluster → Select Cluster → Volume → Volume Action button &gt; Edit Storage.     b) You can modify the name, description, etc. according to the plugin type.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.6/",
        "teaser":null},{
        "title": "2.2.7 Delete Volume",
        "excerpt":" This feature allows you to delete Storage information.   a) Cluster → Select Cluster → Volume → Volume Action button → Delete Volume.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.7/",
        "teaser":null},{
        "title": "2.2.8 Specifying Default Storage",
        "excerpt":"It is the default storage assignment function. If the workload type is StatefulSet type in catalog distribution, it is the default location where storage volume is created when distributed without modification. If the storage plug-in type is NFS Named, default storage configuration is not possible. a ) Click Cluster →...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.8/",
        "teaser":null},{
        "title": "2.2.9 Addon",
        "excerpt":" Provides monitoring services for Addon installed in the cocktail.   a) Click Cluster → Select Cluster → Addon.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.9/",
        "teaser":null},{
        "title": "2.3 Workspace",
        "excerpt":"Allocate workspaces that can be built, deployed, and run. Users, clusters, and libraries can be registered for each workspace. a) Left Main Menu → Workspace Workspace Settings Description Workspace Name Workspace name (Custom ) The number of clusters The number of clusters assigned to the workspace Number of members Number...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3/",
        "teaser":null},{
        "title": "2.3.1 Add Workspace",
        "excerpt":"This function creates a workspace. You can register members, clusters, and registry (repository ) for each workspace. a) Click Main Menu → Workspace → Create Workspace in upper right corner. b) Register name, description, color, registry, member and cluster information to be used in the service. c) Only items with...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 Edit Workspace",
        "excerpt":"This is a function to edit workspace information. You can change the workspace name, description, and color, edit the members to use the service, and edit the cluster to register in the workspace. a) Left Main Menu → Workspace → Workspace Action Menu → Edit Workspace → Click the Modify...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 Delete Workspace",
        "excerpt":" This function deletes the workspace. If the cluster is registered in the workspace, it can not be deleted. You can delete the cluster after removing the cluster from the workspace.   a) Click Main Menu → Workspace → Workspace Action Menu → Delete Workspace on the left.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.3/",
        "teaser":null},{
        "title": "2.4.Dashboard",
        "excerpt":"The dashboard allows you to see at a glance the information served in the Cocktail Cloud. Summary information You can see the number of clusters currently being managed, the number of workspaces, the number of services, and the number of alarms currently occurring. Workspace Status You can see the number...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.4/",
        "teaser":null},{
        "title": "3 User Management",
        "excerpt":"This feature allows you to view and manage current user information. a) Dashboard → Click the [User] button in the bottom-left corner Item Description ID ID of account currently in use User Language Choose from Korean, Japanese, Chinese and English User Timezone Choose from Seoul, Tokyo, Shanghai and NewYork Theme...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3/",
        "teaser":null},{
        "title": "4.Service",
        "excerpt":"  It is a function to create and manage service and workload.                   Item       Description                              Service group action menu                        Call Service Popup Creation          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4/",
        "teaser":null},{
        "title": "4.1 Service Management",
        "excerpt":"And manages the service, the corresponding service map group, and the workload. ㅤㅤㅤㅤㅤ List Explanation A group of logical units. If you activate the action menu, you can change the group name, move up or down, add the group above, or delete the group. Click the +Service Create button to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1/",
        "teaser":null},{
        "title": "4.1.1 Service",
        "excerpt":"Service configuration unit. A group is configured as a logical unit, and a workload is deployed in the group. The metering information of clusters constituting a map or workload monitoring information can be checked. A deployment task can be created to create or update a workload. a) Select Main Menu...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.1/",
        "teaser":null},{
        "title": "4.1.1-1 Service group management",
        "excerpt":"The service is managed as a group. You can create a service in that group. You can change group name, group color, add group, move and delete group. a) Select Main Menu on the left → Service → ▼ \\ (action button ) in the service group Click to activate...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.1.1/",
        "teaser":null},{
        "title": "4.1.1-2 Create Service",
        "excerpt":"The service is managed as a group. You can create a service in that group. You can change group name, group color, add group, move and delete group. a) Select Main Menu on the left → Service → Click the [+Service Create] button at the top of the main menu....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.1.2/",
        "teaser":null},{
        "title": "4.1.1-3 Change Service Name",
        "excerpt":"This feature allows you to modify an service name. a) Select Main Menu on the left → Hover the mouse over Service → Service Name and click the ✎ button on the right of the service. b) Change the contents in the enabled input field and press the Enter key...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.1.3/",
        "teaser":null},{
        "title": "4.1.1-4 Delete Service",
        "excerpt":" This feature allows you to delete services. No workloads must be currently deployed to delete an service.   a) Select Main Menu on the left → Service → Select Service → Delete Service.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.1.4/",
        "teaser":null},{
        "title": "4.1.2 Group Management",
        "excerpt":"workloads are managed in groups, and a workload can be created in a particular group. You can change group names and add, move, or delete groups. You can also change the number of columns. a) Select Main Menu on the left → Service → Select Service Card → Click the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1.2/",
        "teaser":null},{
        "title": "4.2 Workload",
        "excerpt":"  A workload is the minimum unit of an service. One or more workloads can form a single service.   a) Select Main Menu on the left → View workloads configured in a map by clicking Service → Service Card.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2/",
        "teaser":null},{
        "title": "4.2.1 Create Workload",
        "excerpt":"This feature allows you to create and run workloads from Group Management. a) Select Main Menu on the left → Service → ServiceCard → Click the [+] button (Create workload) on a workload group. b) Enter Basic Infomation, Init Container, Container, Instance, Auto Scaling, RollingUpdate Strategy, Network (if Addon multi-nic...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.1/",
        "teaser":null},{
        "title": "4.2.2 Edit Workload",
        "excerpt":"This feature allows you to modify and redeploy workloads (running or stopped). a) Select Main Menu on the left → Service → Select Service Card → Workload. b) Edit basic, container, instance, update policy, service port, and volume information and click the [Update] button to redeploy the workload. If the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.2/",
        "teaser":null},{
        "title": "4.2.3 View Workload Instance Information",
        "excerpt":"This feature allows you to view workload instance information. Instance Information Instance Detailed info, status info, event info, deployment info, web terminal (container), log (container) Services Detailed info, event info, deployment info Persistent Volume Claims Detailed info, detailed volume info, deployment info Controller Detailed info, event info, deployment info, auto-scaler...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.3/",
        "teaser":null},{
        "title": "4.2.4 Stop Workload",
        "excerpt":"This feature allows you to stop a deployed workload. Stopping a workload will delete the corresponding pods. a) Select Main Menu on the left → Service → Select Service Card → Click the [Action] button on a running workload → Stop. b ) Workload Detail You can also run it...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.4/",
        "teaser":null},{
        "title": "4.2.5 Start Workload",
        "excerpt":"  This feature allows you to start a stopped workload.   a) Select Main Menu on the left → Service → Select Service Card → Click the [Action] button on a stopped workload → Start.      b ) Workload Detail You can also run it from the right-hand execution action button.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.5/",
        "teaser":null},{
        "title": "4.2.6 Restart Workload",
        "excerpt":"This feature allows you to restart a workload. It’s essentially the same action as rebooting a computer. a) Select Main Menu on the left → Service → Select Service Card → Click the [Action] button on a running workload → Restart. b ) Workload Detail You can also run it...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.6/",
        "teaser":null},{
        "title": "4.2.7 Remove Workload",
        "excerpt":"  This feature allows you to remove a stopped workload.   a) Select Main Menu on the left → Service → Select Service Card → Click the [Action] button on a stopped workload &gt; Terminate.      b ) Workload Detail You can also run it from the right-hand execution action button.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2.7/",
        "teaser":null},{
        "title": "4.3 Monitoring",
        "excerpt":"  You can view resource usage (CPU, memory, and network) by workload, pod, or container.   a) Select Main Menu on the left → Service → Select Service Card → Monitoring.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.3/",
        "teaser":null},{
        "title": "4.4 Pipeline",
        "excerpt":"With the pipeline feature, you can build an image and deploy to a workload all at once. You can also change the image version of a deployed workload and quickly redeploy. a) Select Main Menu on the left → Service → Select Service Card → Pipeline. Pipeline Menu Description Batch...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.4/",
        "teaser":null},{
        "title": "4.5 Storage Volume",
        "excerpt":"Provides persistent volume status, creation and deletion. a) Select Main Menu on the left → Service → Service Card → Storage volume Items Description Volume Name Name of the created Storage volume, click to go to the details of the persistent volume Volume type Volume Type (Single, Shared) Status The...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.5/",
        "teaser":null},{
        "title": "4.5.1 Creating Storage Volumes",
        "excerpt":"Creating Persistent Volumes. a) Select Main Menu on the left → Service → Service Card → Storage volume Items Description Storage volume type Volume Type (Single, Shared) Storage Exposing a clustered storage list Access mode Select ReadWriteOnce if the Storage volume type is Single, ReadWriteMany, ReadOnlyMany if it is a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.5.1/",
        "teaser":null},{
        "title": "4.5.2 Delete Storage Volumes",
        "excerpt":" Delete the persistent volume.   a) Select Main Menu on the left → Service → Service Card → Storage volume → Storage volume Action Menu(Activate) → Click Delete    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.5.2/",
        "teaser":null},{
        "title": "4.6 Config Information",
        "excerpt":" Application units can be used like volumes by storing variable values in the form key=value.   a) Select Main Menu on the left → Service → Select Service Card → Config Information.                      Menu       Description                       Config Map       Register, edit, and delete config maps                 Secret       Register, edit, and delete secrets          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6/",
        "teaser":null},{
        "title": "4.6.1 Config Map",
        "excerpt":"This feature allows you to save config files as maps on workloads to be used as volumes. a) Select Main Menu on the left → Service → Select Service Card → Config Information → Config Map. Item Description Redirects to Add Config Map page Name Name of config map (user-defined)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.1/",
        "teaser":null},{
        "title": "4.6.1.1 Add Config Map",
        "excerpt":"This feature allows you to add config maps. a) Select Main Menu on the left → Select Main Menu on the left → Service → Select Service Card → Config Information → Config Map → Click the [+] button to be redirected to the Add Config Map page. b) Enter...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.1.1/",
        "teaser":null},{
        "title": "4.6.1.2 Edit Config Map",
        "excerpt":"This feature allows you to modify config map data (excluding name). a) Select Main Menu on the left → Service → Select Service Card → Config Information → Config Map → Config Map Action Menu (Activate) → Edit Config Map b) After changing the data value(s), click the [Update] button...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.1.2/",
        "teaser":null},{
        "title": "4.6.1.3 Delete Config Map",
        "excerpt":"  This feature allows you to delete service config maps.   a) Select Main Menu on the left → Service → Select Service Card → Config Information → Config Map → Config Map Action Menu (Activate) → Config Map Delete     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.1.3/",
        "teaser":null},{
        "title": "4.6.2 Secret",
        "excerpt":"This feature allows you to save secret files on servers to be used as environment variables or volumes. a) Select Main Menu on the left → Service → Select Service Card → Config Information → Secret. Item Description Redirects to Add Secret page Name Name of secret (user-defined) Description Secret...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.2/",
        "teaser":null},{
        "title": "4.6.2.1 Add Secret",
        "excerpt":"This feature allows you to add secrets to a service. a) Select Main Menu on the left → Service → Select Service Card → Config Information → Secret → Click the [+] button to be redirected to the Add Secret page. b) Enter the name and data values and click...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.2.1/",
        "teaser":null},{
        "title": "4.6.2.2 Edit Secret",
        "excerpt":"This feature allows you to modify secret data (excluding name) added to a workload. a) Select Main Menu on the left → Service → Select Service Card → Config Information → Secret → Secret Action Menu (Activate) → Edit Secret b) After changing the data value(s), click the [Update] button...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.2.2/",
        "teaser":null},{
        "title": "4.6.2.3 Delete Secret",
        "excerpt":"  This feature allows you to delete service secrets.   a) Select Main Menu on the left → Service → Select Service Card → Config Information → Secret → Secret Action Menu (Activate) → Delete Secret     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.2.3/",
        "teaser":null},{
        "title": "4.6.3 Network",
        "excerpt":"You can save it in Json format on the server and use it as the network configuration of the workload. The network menu can be configured only if multi-nic is installed in the Addon list. a) Click Main Menu → Service → Select Service Card → Setup Information → Network....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.3/",
        "teaser":null},{
        "title": "4.6.3.1 Add Network",
        "excerpt":"Add a network to the service. a) Click left main menu → service → select service card → setting information → network → create network button to move to registration page. b) Enter the name, type, and network settings and click the Create button at the top right to create...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.3.1/",
        "teaser":null},{
        "title": "4.6.3.2 Edit Network",
        "excerpt":"You can edit the data of the network added to the service. (Name, type cannot be changed) a) Left main menu → Service → Select service card → Setup information → Network → Network action menu (Activation) → Modify network b) After changing the data values, click the Modify button...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.3.2/",
        "teaser":null},{
        "title": "4.6.3.3 Delete Network",
        "excerpt":" Delete the network from the service.   a) Left main menu → Service → Select service card → Setup information → Network → Network action menu (Active) → Delete network     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.6.3.3/",
        "teaser":null},{
        "title": "4.7 Service exposure",
        "excerpt":" You can connect Cluster Ip, Node Port, and Loadbalancer ports to the created workload and add ingress configuration.   a ) Left Main Menu → Service → Select Service Map → Service exposure.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.7/",
        "teaser":null},{
        "title": "4.7.1 Service exposure settings",
        "excerpt":"Connect Cluster Ip, Node Port, and Loadbalancer ports to the created workload. a) Left Main Menu → Service → Select Service Card → Service exposure. b) Click on the Add button on the screen service exposure line. c ) Specifies the workload to associate the service type with the port....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.7.1/",
        "teaser":null},{
        "title": "4.7.2 Ingress settings",
        "excerpt":"You can add ingress settings to the generated service. a) Left Main Menu → Service → Select Service Card → Service. b) Click the Add button on the Ingress line of the screen. Ingress Adding an ingress host can be done by selecting the ‘Default Host’ or ‘Direct input’ on...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.7.2/",
        "teaser":null},{
        "title": "5.Build Management",
        "excerpt":"This feature allows you to manage build tasks for a Docker image. You can download an application, build the source file, and build the image file to be uploaded to a Harbor registry. a) Click on the left main menu → [Build] to go to this page. Item Description Build...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5/",
        "teaser":null},{
        "title": "5.1 Add Build",
        "excerpt":"This feature allows you to add Docker image build tasks. Three options are available: Application download, application build, and image build. a) The left from the main menu screen, click → build the [Build Create] button to go to that page. b) Enter basic information. c) Add the build operation...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.1/",
        "teaser":null},{
        "title": "5.2 Edit Task Settings",
        "excerpt":"This feature allows you to modify build tasks. a) Left main menu → Build → Build Action Menu (Activation) → Select the [Task Config Edit] to go to that page. b) Click the [Edit] button to edit the basic information and the build work, and click the [Update] button to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.2/",
        "teaser":null},{
        "title": "5.3 History",
        "excerpt":"This feature allows you to view the build history of a particular build. a) Build Action menu(Activation) in the left main menu screen → Build → Click the [History] to go to that page. b) Click the Action menu(Activation) → [Log View] and you can see the build log. c)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.3/",
        "teaser":null},{
        "title": "5.4 Execute Build",
        "excerpt":"This feature allows you to execute a build task. When a build is executed, application download, application build, and image build are performed all at once. a) Build Action Menu(Activation) of the build task to be executed from the build list Select [Build Run] from the Actions menu to activate...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.4/",
        "teaser":null},{
        "title": "5.5 Cancel Build",
        "excerpt":"  Cancel the build operation. You can only cancel the build job being in the RUNNING state.   a) In the build list, cancel the build operation by selecting the Build Action menu (Activation ) → [Build Cancel] of the build operation to be canceled.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.5/",
        "teaser":null},{
        "title": "5.6 View Log",
        "excerpt":"This feature allows you to view the most recent log of a build operation. A real-time log will be displayed if a build is currently being processed. a) From the build list, you can view the build execution log for that build job by selecting the build action menu (Activation...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.6/",
        "teaser":null},{
        "title": "5.7 Delete Task",
        "excerpt":"  This feature allows you to delete build tasks.   a) Build Action menu(Activation) in the Build Action to delete from the list of builds → select [Task Delete] and you can delete the build operation.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.7/",
        "teaser":null},{
        "title": "6.Catalog",
        "excerpt":"This feature allows you to easily create, deploy, and manage workloads by creating a template of an service configuration. Use the catalog feature to use multiple workloads at once. The catalog feature is divided into service catalogs and platform catalogs. Catalog Menu Description My Catalog User-generated catalog Cocktail Catalog Default...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6/",
        "teaser":null},{
        "title": "6.1 Save Catalog",
        "excerpt":"This feature allows you to create catalogs and deploy multiple desired workloads at once. If a workload container image is a build, only the image is saved and converted into a common image to be saved as a catalog. A saved catalog can be found in the service catalog. When...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.1/",
        "teaser":null},{
        "title": "6.2 Deploy Catalog",
        "excerpt":"This feature allows you to deploy generated catalogs. If necessary, unnecessary instances can be excluded or edited prior to deployment. a) Catalog → Click the [Deployment] button on the desired template. b) Select the service, cluster, and service from the template category and click [Deploy]. You may exclude unwanted instances...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.2/",
        "teaser":null},{
        "title": "6.3 Edit Catalog",
        "excerpt":"This feature allows you to modify catalog information. You may modify the template version, summary, and other information, as well as the deployment information for each instance. a) Catalog → Click the [Edit] button on the desired template b) You may modify the template version, summary, and other information. The...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.3/",
        "teaser":null},{
        "title": "6.4 Delete Catalog",
        "excerpt":"  This feature allows you to delete unnecessary catalogs (excluding Platform catalogs).   a) Catalog → Click the [Edit] button on the desired template   b) Select the desired template version and click the [Delete] button. The selected template version will be deleted.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.4/",
        "teaser":null},{
        "title": "6.5 Export Catalog",
        "excerpt":" You can export a catalog as a catalog file. (Not avaiable in Platform catalog)   a) Catalog → Click the [Edit] button for exporting the catalog.     b) Click the [Export] button. It is downloaded to a file named ‘catalog’s name-version.zip’.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.5/",
        "teaser":null},{
        "title": "6.6 Import Catalog",
        "excerpt":" You can create the catalog through the import function with a exported catalog file.   a) Catalog → Click the [Import] button.     b) Click the [Save] button after Select a catalog file to create.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.6/",
        "teaser":null},{
        "title": "7.Cluster",
        "excerpt":"  Cluster status and resources, services, and alarms are provided.                   Cluster Menu       Descrition                       Resources       Information services for node pools, storage and gateways                 Services       Resource utilization (CPU, memory, and network) for all applications and monitoring of individual applications                 Alarm       Alerts for cluster-related events          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7/",
        "teaser":null},{
        "title": "7.1 Cluster List",
        "excerpt":"This feature allows you to add, edit, and delete Kubernetes cluster information assigned by a provider. a) Cluster → Click the [Sort] button and select the desired criteria. Cluster Cluster Type Status Cluster Status Service Number of service maps registered in the cluster Request CPU in cluster Request Memory in...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.1/",
        "teaser":null},{
        "title": "7.2 Resource Status",
        "excerpt":" It can collectively check information of Computing resources, storage, and Service exposure resource status.   a) Click Cluster → Select cluster → Resource Status.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.2/",
        "teaser":null},{
        "title": "7.3 Service",
        "excerpt":"  This feature allows you to view the total resource utilization (disk drive, CPU, memory, and network) of all services, as well as the namespace and instance information of individual services. Click an service name to be redirected to the service map page.   a) Cluster → Select Cluster → Service.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.3/",
        "teaser":null},{
        "title": "7.4 Alarm",
        "excerpt":"  This feature allows you to receive alerts for cluster events.   a) Cluster → Select Cluster → Alarm.     b) Click on an alarm name to view detailed information.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.4/",
        "teaser":null},{
        "title": "7.4.1 Alerts List",
        "excerpt":"An alert occurs when the occurrence condition in the following list continues for the duration time. AlertManager Alarm ID ALM-001 Severity warning Alarm Name AlertmanagerDown duration 5minute occurrence condition Alertmanager Occurs when metrics can not be collected Action Check Prometheus logs and Alertmanager logs and events. If necessary, restart the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.4.1/",
        "teaser":null},{
        "title": "7.5 Service exposure",
        "excerpt":"You can check the service exposure and ingress information of the cluster. Clicking on a service name will take you to that service, and click to provide a link. a) Click Clusters → Select Clusters → Expose Services. b) You can check the details by clicking on the service exposure...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.5/",
        "teaser":null},{
        "title": "7.6 Storage volume",
        "excerpt":"  Provides the status and details of persistent volumes in a cluster.   a) Cluster → Select Cluster → Storage Volume     b) Storage Volume Detail     c) Storage Volume Action Menu     d) Request a volume information     e) Volume information     f) Storage information    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.6/",
        "teaser":null},{
        "title": "9.Members",
        "excerpt":" This feature allows you to view the member infomation of the current workspace.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/8/",
        "teaser":null},{
        "title": "9.Glossary",
        "excerpt":"  The following section provides a list of common Kubernetes and Cocktail terminologies and explanations.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/9/",
        "teaser":null},{
        "title": "9.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster Term Description Namespace A separate environment in which users across multiple teams or projects can work in virtual k8s clusters Nodes A physical server or VM running clustered k8s applications Persistent Volumes(PV) External storage; Supports NFS, iSCSI, and cloud storage systems Roles Grants permissions according to usage case. Storage...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/9.1/",
        "teaser":null},{
        "title": "9.2 Cocktail",
        "excerpt":"1.Environment Settings Service for pre-registering information to use Cocktail Term Description User User management for use of Cocktail Account Management of user credentials for k8s clusters Service Distributes and manages tasks on a job or project basis. The administrator may grant access privileges to general users on a service basis...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/9.2/",
        "teaser":null},{
        "title": "9.3 Cocktail System Error Code",
        "excerpt":"1. Error Code Code Message CCCM001 Can not reveal specific error number. CCCM002 Unknown error CCCM004 Invalid function call argument CCCM005 Unauthorized request CCCM006 The information passed is not correct CCCM007 Server, job, etc. are not correct or can not process request CCCM019 Internal server error CCCM020 External call API...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/9.3/",
        "teaser":null},{
        "title": "10.Customer Support",
        "excerpt":"Thank you for using Cocktail. Contact us for technical support and product purchase consultations. We provide the following services: On-site Q&amp;A and product consultation services. Professional technical consultations via telephone or fax. (Limited to customers who have registered their products) Various event invitations and information. Support Email: byoungoh.lee@namutech.co.kr Product Developer...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/9.4/",
        "teaser":null},{
        "title": "Cocktail Cloud",
        "excerpt":"                                                                                                                                    한국어 메뉴얼                                                                                                      Learn More                                                                                                                                                           日本語マニュアル                                                                                                      Learn More                                                                                                                                                           中文手册                                                                                                      Learn More                                                                                                                                                           English Manual                                                                                                      Learn More                                       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/",
        "teaser":null},{
        "title": "Cocktail Cloudとは?",
        "excerpt":" カクテルクラウドは、オールインワンコンテナ管理プラットフォーム（All-in-one Container Management Platform）である。   クラウドの使用が一般化し、インフラだけでなく、アプリケーション、サービス管理に対するニーズが高まっている。その理由は、過去のような開発や運用方式では、クラウドのメリットを活用するのに限界が出てきたためだ。   特にアプリケーション領域では、継続的インテグレーション・デプロイ（Continuous Integration/ Deploy、CI/ CD）、移行（Migration）、マルチ/ハイブリッドクラウド構築など自動化、効率化、統合管理に対するニーズが増えている。   このような背景から、コンテナ技術の普及は当然だと言える。現在、多くの企業がコンテナ技術を導入しており、導入企業の数は増加し続けている。 （参照: http://redmonk.com/fryan/2017/09/10/cloud-native-technologies-in-the-fortune-100）   コンテナは、アプリケーションまたはサービスを独立して実行できる単位にパッケージ化する技術で、インフラ環境に関係なく、同一の開発、運用環境を提供する。したがって、インフラからサービスまで、クラウド管理を標準化し、開発および運用に必要な労力を削減することができる。特に一貫した環境下で、マルチ/ハイブリッドクラウドを管理できるというメリットがある。   カクテルクラウドはコンテナの強みをクラウド管理に適用し、開発および運用業務を効率化した上、単一またはマルチ/ハイブリッドクラウド戦略を実現するためのプラットフォームを提供することができる。   カクテルクラウドの主な機能は、次の通りである。      コードからのビルド、デプロイ、更新までのパイプラインの自動化   ワークロード（サービス）中心のコンテナ管理：パッケージ、ライフサイクル、リソースなど   フルスタック監視：インフラからコンテナまでの状態およびリソースの監視。アラートの管理   マルチ/ハイブリッドクラスターのプロビジョニングおよび管理：Baremetal、プライベート/パブリッククラウド     次の記事 : Cocktail Cloud 構成ガイド  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.0/",
        "teaser":null},{
        "title": "Cocktail Cloud 構成ガイド",
        "excerpt":"  カクテルクラウドは、その役割に応じて、5つのレイヤーで構成されている。              Cluster Management Layer: コンテナがデプロイ/実行するインフラ（クラスター）とオーケストレーション（Orchestration）を担うレイヤー。オーケストレーションは、Kubernetes(https://kubernetes.io) が担い、インフラ管理、監視など拡張管理機能を提供する。            Service Management Layer: サービス（Workload）に基づいて、コンテナの構成と管理を担うレイヤー。サービスを構成する多数のコンテナと関連オブジェクトをパッケージ化して、そのライフサイクルと監視を管理する。            Pipeline: コードからコンテナのビルド、デプロイまでのプロセスを自動化し、継続的インテグレーション/デプロイを行う。ユーザーは、必要なパイプライン構成を設定とスクリプトで行うことができる。            Catalog: 共通のランタイム（DB、ミドルウェアなど）テンプレートを提供するレイヤー。テンプレートは、追加の構成作業なく必要なときにすぐデプロイして使用することができる。また、ユーザーアプリケーションのスナップショットも保存、管理することができる。            Dashboard: クラスター、サービスのステータスと監視ビューを提供する。       続いて、各レイヤーに関して詳しく説明する。     Previous Topic : Cocktail Cloud の概念   Next Topic : クラスター管理のレイヤー  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.1/",
        "teaser":null},{
        "title": "クラスター管理のレイヤー",
        "excerpt":"  クラスター管理のレイヤーは、クラスターを構成するインフラとコンテナオーケストレーションエンジンに分けられる。構成の詳細は、下の図の通りである。      カクテルクラウドは、クラスターインフラとオーケストレーションエンジンをユーザーの設定に基づいて自動的にプロビジョニング（Provisioning）するが、これを担うツールが CUBEである。CUBEは、高可用性（High Availability、HA）のKubernetesクラスターを構成している。CUBEがプロビジョニングするクラスター構成は、高い安定性とセキュリティ、拡張性を提供する。（これをCUBEクラスターという。）   CUBEクラスターは、現在、以下のようなクラウドプラットフォームおよびプロバイダをサポートしている。しかし、CUBE はインフラに依存しない構成が可能であるため、どのようなインフラでも構成が可能である。下記は、インフラの自動プロビジョニングを基準としたものである。           物理インフラ（Baremetal）            クラウドプラットフォーム : Openstack、Cloudstack、VMWare            クラウドサービス : AWS、GCP、Azure       またCUBEツールは、クラスターのKubernetesのバージョンアップ、ノード（物理/仮想マシン）の追加/削除、バックアップといったクラスター管理のための機能を提供する。   カクテルクラウドは、マルチクラスターを統合管理する。つまり、複数のクラスターを必要なサービスに割り当て、クラスター全体の管理と監視を行う。クラスターは必要に応じて追加することができる。   CUBEクラスターには、管理のための拡張コンポーネントが追加で提供される。      Monitoring : インフラ、コンテナ、サービス（Workload）の状態、構成、リソースを監視   Alerting : 特定の条件になったとき、電子メール、メッセンジャーでアラートを通知および管理   Metering : パブリッククラウドクラスターの場合の使用コストを照会   Inspecting : コンテナおよびKubernetesオブジェクトの変更履歴およびイベントの管理   拡張コンポーネントが提供する情報と管理機能は、カクテルクラウドの「クラスタ管理」ビュー（View）で確認できる。     Previous Topic : Cocktail Cloud 構成ガイド   Next Topic : サービス管理レイヤー  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.2/",
        "teaser":null},{
        "title": "サービス管理レイヤー",
        "excerpt":"  一般的に、一つのアプリケーションやサービスは、多数のコンテナで構成されている。特にKubernetesのようなオーケストレーションエンジンの場合、コンテナ以外にもサービスポート、コントローラ、ボリュームなどの追加オブジェクトを必要とする。したがって、コンテナベースのアプリケーションおよびサービスを管理するためには、コンテナと関連オブジェクトをパッケージ化して管理する抽象化の単位が必要である。サービス管理レイヤーは、これを担うレイヤーである。   カクテルクラウドのサービス管理は、以下のような階層構造を有する。           Service : 最上位階層としてサービスに必要なクラスターリソース、イメージレジストリ、イメージビルドを割り当て管理するグループ。開発、運用者の役割に応じて権限を付与し、独立させて管理を行うことができる。カクテルクラウドでは、必要に応じて多数のサービスを作成し、チームやサービスごとに割り当てて管理することができる。            Service Map : アプリケーションの構成と管理を行う単位で、一つのワークロード（Workload）に対応している。例えば、一つのサービスを開発系、検証系、運用系に該当するアプリケーションマップで構成することができるほか、データ管理、分析システムなどの役割に基づいて、サービスマップを構成することもできる。サービスマップは、論理的にワークロードのための多数のコンテナの構成を管理する単位といえる。前述したサービスは、複数のサービスマップで構成されている。            Workload : コンテナと関連オーケストレーションオブジェクトをパッケージ化する単位である。サービスマップは、複数のワークロードで構成されている。例えば、Webサーバー、DBサーバーなどのコンポーネントに基づいてワークロードを構成することもでき、小規模のマイクロサービスもワークロードとして構成することができる。 ワークロードの詳細は、下記の通りである。       下の図は、サービス管理レイヤーの構成を図式化したものである。      Workload   サービス管理レイヤーにおいて、最も重要な役割を担っているのがワークロードだ。前述したとおり、ワークロードは、コンテナと関連オーケストレーションオブジェクトをパッケージ化する単位である。ワークロードは、パッケージ化されたオブジェクトの作成、更新などライフサイクルを管理するとともに、状態とリソースをパッケージ単位で監視し、管理する。   これを図式化したのが下の図である。      ワークロードが提供する管理機能には、次のようなものがある。           ワークロードの作成、修正（更新）、停止、再起動、削除、オートスケール            ローリングアップデート            サービスポート管理            ボリューム管理            監視            インスペクティング : オーケストレーションオブジェクトの状態およびデプロイ情報の照会            ウェブターミナル、ログの照会：コンテナへのシェル接続。コンテナのログ照会         Previous Topic : クラスター管理のレイヤー   Next Topic : パイプラインレイヤー  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.3/",
        "teaser":null},{
        "title": "パイプラインレイヤー",
        "excerpt":"  パイプラインレイヤーは、コードからコンテナビルドとデプロイを自動化する。   Buildは、コードダウンロード、コードビルドおよびテストなどのタスク（Task）、コンテナイメージビルドをユーザー設定に基づいて順次実行する。タスク（Task）は、内部でタスクを実行するコンテナを使用するが、基本的に提供されるコンテナのほか、公開またはユーザーが作成したコンテナを使用して拡張することができる。   ビルドされたイメージは、カクテルサーバーのコンテナとしてローリングアップデートする。ビルドで作られたイメージには自動的にビルド番号が付与され、これによって最新バージョンまたはロールバックを実行する。   ビルドからデプロイまでの全体的な作業プロセスは、すべてパイプラインで自動化されている。したがって、ビルドとパイプラインが一旦構成されると、開発者はコードの作成および修正だけに集中することができる。   下の図は、パイプラインレイヤーの構成を図式化したものである。      パイプラインレイヤーは、継続的インテグレーション・デリバリー（CI/ CD）によって、DevOpsのための基盤を提供する。DevOpsは、開発と運用間の連続性と有機的な協力を強調している。CI/CDは、DevOpsに必要な構成要素の一つで、コンテナベースの開発、運用でも非常に重要である。     Previous Topic : サービス管理レイヤー   Next Topic : カタログレイヤー   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.4/",
        "teaser":null},{
        "title": "カタログレイヤー",
        "excerpt":"  コンテナは、その構成をイメージ化してデプロイを実行する。したがって、頻繁に使用するDBやミドルウェアなどのランタイムは、コンテナイメージとデプロイ情報をテンプレート化すると、繰り返し行う作業を減らし、いつでも簡単にデプロイして使用することができる。   このようなテンプレートの作成、管理を担っているレイヤーがカタログである。カタログレイヤーの構成を図式化すると以下のようになる。      カタログは、目的に応じて2つの形式に分けられる。           Service Catalog : サービスカタログは、ユーザーがサービスのために構成したアプリケーションのスナップショットを保存して管理する。インフラまたはクラウドプロバイダーの変更などで移転が必要な場合、サービスカタログのスナップショットを使用することができる。スナップショットは、サービスマップの構成をそのまま保存する。したがって、他の環境にデプロイする場合は、必要に応じてスナップショットの設定を修正してデプロイする必要がある。            Platform Catalog : カクテルクラウドで「カクテルクラウドハブ」を介して提供されるランタイムテンプレートのことである。ユーザーは、テンプレートをそのまま、または自身の環境に合わせて設定を変更し、デプロイすることができる。プラットフォームカタログは現在、DB、ミドルウェア、開発/運用ツール、ブログ、機械学習など幅広く使用されているオープンソースをテンプレートとして提供しており、継続的に更新されている。         Previous Topic : パイプラインレイヤー   Next Topic : ダッシュボードレイヤー  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.5/",
        "teaser":null},{
        "title": "ダッシュボードレイヤー",
        "excerpt":"  カクテルクラウドのダッシュボードレイヤーは、サービス、監視、クラスターのステータスなどをWebUI方式で提供する。   ダッシュボードは、ユーザーの役割に合ったビューを権限に応じて提供する。カクテルクラウドのユーザー権限は、次の通りである。           Administrator（Admin）: クラスター管理を実行し、カクテルクラウドのあらゆるサービスに対する管理権限を有する。            DevOps : 割り当てられた複数のワークスペースのみ管理権限を有する。ワークスペース別にダッシュボードを提供し、クラスター管理を行うことができない。       カクテルクラウドが提供するダッシュボードビューは、以下の通りである。           総合ダッシュボード : 全サービスとクラスターのステータスを表示するビュー            サービス管理ビュー : サービスを作成し、デプロイと監視、運用のためのDevOpsユーザービュー            カタログビュー : サービスカタログとプラットフォームカタログを照会およびデプロイすることができるビュー            クラスタービュー : 複数のクラスターを統合管理し、監視することができるビュー            環境設定 : カクテルクラウドプラットフォームの設定ビュー         Previous Topic : カタログレイヤー  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/0.6/",
        "teaser":null},{
        "title": "1.ログイン",
        "excerpt":"  カクテルクラウドの初期ログイン画面は、以下の通りである。   System、ID、Passwordを入力後、ログイン。   （IDは管理者に別途確認必要）      最初の接続やパスワードの初期化時には、 必ずパスワードを変更する必要がある。      期間が90日を経過した場合にも、 パスワードを変更したり、 パスワードを延長することができる。      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/1/",
        "teaser":null},{
        "title": "10.用語説明",
        "excerpt":"  カクテルクラウドを活用する上で役立つ、KubernetesおよびCocktail Cloudに関する用語を説明する。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/10/",
        "teaser":null},{
        "title": "10.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster 用語 説明 Namespace k8sの仮想クラスタで、 ユーザーが複数のチームやプロジェクトに分散して作業することができる別の環境 Nodes k8sでクラスタリングされていて、アプリケーションが動作している物理サーバーまたはVM Persistent Volumes(PV) 外部ストレージ。NFS、iSCSI、クラウドが提供するストレージシステムをサポート Roles 使用に基づいて権限を付与 Storage Classes PVを動的にProvisioningする場合にNFSサーバーを識別するための識別子 2.Workloads 用語 説明 Cron Jobs 「ある時点で一度」 または 「ある時点での繰り返し」など時間ベースでの管理作業 Deployments Podを作成するための設定値の登録情報 Jobs Jobは、一括処理を行うPodのSupervisor。つまり、特定の計算またはバックアップといった特定の間だけ実行されるプロセス Pods 複数のコンテナで構成されているk8sにおけるdeployのための最小単位。Podは、アプリケーションスタックで異なるDockerイメージを組み合わせて構成される Replica Sets 指定された Podのレプリカ数が常に実行（維持）されるようにする Replication Controllers 指定された数のPodのレプリカが実行されているかをチェック Stateful Sets Podのデプロイおよび拡張を管理し、 Podの順序と特性の設定を提供 3.Discovery and Load balancing 用語 説明 Ingresses 外部からのアクセスを橋渡しするもので名前ベースの仮想ホスティングを提供 Services...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/10.1/",
        "teaser":null},{
        "title": "10.2 Cocktail Cloud",
        "excerpt":"1.環境設定 カクテルクラウドを利用するために、事前に情報を登録するサービス 用語 説明 ユーザー Cocktail Cloudを利用するためのユーザ管理 アカウント k8s Clusterのユーザー認証情報の管理 サービス 業務またはプロジェクト単位でタスクを分散して管理。 管理者は、 一般ユーザーに対してサービス単位でアクセス権を付与することができる 2.サービス サービス単位でタスクを細分化し、ビルドでDockerイメージを作成することができる。 ビルドされたイメージで、ワークロードの作成、照会、修正、削除などの管理を行うサービス 用語 説明 サービスマップ k8sのNamespace ビルド Docker imageを作成するためのタスクをサポートするサービス モニタリング サービス内で、ワークロード、Pod、コンテナ単位でリソース監視を提供 パイプライン ビルドからデプロイまで、便利に一括で実行できるサービス 設定 サービス単位で変数の値またはファイルを保存して使用することができるサービス 3.カタログ ワークロード構成をテンプレート化し、簡単にワークロードの作成およびデプロイ、編集管理が行えるサービス。 4.クラスター クラスター、 ノード、 ワークロード、 ボリューム/ストレージ、 アラート、 メータリングなどの登録管理およびステータスの照会が可能なサービス 用語 説明 クラスター k8sのオーケストレーションを構成するサーバーのパッケージ ノード k8sのクラスタサーバーの個々のサーバー。MasterとWorkerに区分される ワークロード 複数のコンテナで構成されるサービス ボリューム/ストレージ 外部ストレージ情報 アラート...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/10.2/",
        "teaser":null},{
        "title": "10.3 Cocktail System Error Code",
        "excerpt":"1. エラーコード コード メッセージ CCCM001 具体的なエラー番号はわかりません。 CCCM002 不明なエラー CCCM004 無効な関数呼び出し引数 CCCM005 不正なリクエストです。 CCCM006 情報が正しくありません。 CCCM007 サーバー、ジョブなどが正しくないか、リクエストが処理できません。 CCCM008 要求する権限がありません。 CCCM019 Internal server error CCCM020 外部コールAPIがエラーを返したか、コールに失敗しました。 CCCM023 実行するアクションはありません。 CCCM026 エラーが発生しました。 CCCM027 登録中にエラーが発生しました。 CCCM028 変更中にエラーが発生しました。 CCCM029 削除中にエラーが発生しました。 CCCM030 照会中にエラーが発生しました。 CDCM031 データベース処理中、エラーが発生しました。時間を空けて再試行してください。問題が解決しない場合は、管理者にお問い合わせください。 CDCM032 データベース接続中にエラーが発生しました。時間を空けて再試行してください。可能な場合は、データベースの接続状態を確認したり、管理者に問い合わせてください。 CKSY001 Cube Cluster APIエラーが発生しました。 CKSY002 Cube ClusterのバージョンがCocktailでサポートしていません。 CKSY003 暗号化中にエラーが発生しました。 CCUS001...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/10.3/",
        "teaser":null},{
        "title": "10.4 ユーザーサポートサービス",
        "excerpt":"  Cocktail Cloudをご利用いただき、誠にありがとうございます。   製品のご購入や機能に関するご相談など、技術的なサポートからお客様に必要なサービスをご提供しております。 サポートしているサービスは、以下の通りです。      Q＆A、製品に関する情報およびその他お問い合わせを承っております。   ユーザー登録済みの製品やご相談が可能な製品に限りましては、 お電話やメールにて専門的な技術相談が可能です。   各種イベントへのご招待および情報をご提供いたします。   サービスサポート   Eメール: cc_support@namutech.co.jp   製品開発会社   NAMU TECH JAPAN 株式会社      住所 : 〒102-0074 東京都千代田区九段南4-6-1　九段シルバーパレス201号   Tel : 03-6272-4788   Fax : 03-6272-4794   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/10.4/",
        "teaser":null},{
        "title": "2.システム管理",
        "excerpt":" カクテルクラウド利用に必要なシステム、クラスター、ワークスペースを管理することができる。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2/",
        "teaser":null},{
        "title": "2.1 システム管理の詳細",
        "excerpt":"システム利用に必要なシステム情報、アカウント情報、クラウドメータリングアカウント、システムユーザーを管理することができる。 a) 左側のメインメニュー → システム システム情報 説明説明 システム名 カクテルクラウドのシステム名 システムアカウント カクテルクラウドへアクセスするためのシステムアカウント システムタイプ カクテルクラウドの使用するシステムタイプ ベース言語 カクテルクラウドの基本言語 システムロゴ カクテルクラウドのシステムロゴ システム説明 カクテルクラウドのシステム説明 アカウント情報 説明 組織名 カクテルクラウドシステムで利用する組織名 アカウント担当者名 カクテルクラウドのアカウント管理を行う担当者名 アカウント担当者Email カクテルクラウドのアカウント管理を行う担当者のメールアドレス 住所 カクテルクラウド利用組織の住所 ライセンスコード カクテルクラウドのライセンスコード クラウドメータリングアカウント 説明 アカウント名 クラウドメータリングのアカウント名 プロバイダー クラウドプロバイダーの種類 説明 クラウドメータリングのアカウント説明 システムユーザー 説明 名前 システムユーザー名 ID カクテルクラウドのアクセスユーザーID ロール システムユーザーの権限（管理者、ユーザー） 最終アクセス日 システムユーザーの最終アクセスした日時 説明...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1/",
        "teaser":null},{
        "title": "2.1.1 システム情報の変更",
        "excerpt":"  システム利用に必要なシステム情報、アカウント情報を変更することができる。   a) 左側のメインメニュー → システム → 右上の編集ボタン     システム情報（デフォルト言語、システムロゴ、システム説明）とアカウント情報（組織名、アカウント担当者名、アカウント担当者Email、住所）を変更することができる。   b) 左側のメインメニュー → システム → 変更完了後、変更ボタンをクリックする。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 クラウドメータリングアカウントの登録",
        "excerpt":"  クラウドメータリングアカウントを登録することができる。   a) 左側のメインメニュー → システム → クラウドメータリングアカウント → アカウント登録                Amazon Web Service             Google Cloud Plalform       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 クラウドメータリングアカウントの変更",
        "excerpt":"  クラウドメータリングアカウントを変更することができる。   a) 左側のメインメニュー → システム → クラウドメータリングアカウント → アカウントアクションメニュー(アカウント行の右端のボタン) → アカウントの編集 → 内容変更後、変更ボタンをクリックする。       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 クラウドメータリングアカウントの削除",
        "excerpt":"  クラウドメータリングアカウントを削除することができる。   a) 左側のメインメニュー → システム → アカウントアクションメニュー(アカウント行の右端のボタン) → アカウント削除    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.4/",
        "teaser":null},{
        "title": "2.1.5 システムユーザーの追加",
        "excerpt":"  システムユーザーを追加する機能。  a) 左側のメインメニュー → システム → システムユーザー → ユーザー追加をクリック。                       システムユーザー       説明                       名前       システムユーザー名                 ID       カクテルクラウド接続ユーザーID                 説明       システムユーザー説明          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.5/",
        "teaser":null},{
        "title": "2.1.6 システムユーザーの変更",
        "excerpt":" システムユーザー情報（名前、説明）を変更する機能。   a) 左側のメインメニュー → システム → システムユーザー → ユーザーアクションメニュー(ユーザー行の右端のボタン) → ユーザー編集をクリック。       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.6/",
        "teaser":null},{
        "title": "2.1.7 システムユーザーのパスワード初期化",
        "excerpt":"  カクテルクラウドのユーザーパスワードを初期化する機能。（初期化後、提供する初期パスワードは’Pass0000’である。）   a)  左側のメインメニュー → システム → システムユーザー → ユーザーアクションメニュー(ユーザー行の右端のボタン) → ユーザーパスワード初期化をクリックする。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.7/",
        "teaser":null},{
        "title": "2.1.8 システムユーザーの削除",
        "excerpt":" システムユーザーを削除する機能。   a)  左側のメインメニュー → システム → システムユーザー → ユーザーアクションメニュー → ユーザー削除をクリックする。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.1.8/",
        "teaser":null},{
        "title": "2.2 クラスター",
        "excerpt":"  クラスターの登録管理とノードおよびアプリケーション単位の監視、ボリューム、アラーム、コストサービスが提供される。                   クラスタメニュー       説明                       ノード       ノード全体の CPU、 メモリ、 ネットワークの使用量と個々のノードの監視サービス                 アプリケーション       アプリケーション全体の CPU、 メモ、 ネットワークの使用量と、 個々のアプリケーションの 監視 サービス                 ボリューム       ストレージ 管理及びボリューム ステータス                 アラーム       クラスタのイベント情報関連アラームサービス                 コスト       クラスタコストとリソース別コストサービス                 登録       クラスタの照会および修正、 削除          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2/",
        "teaser":null},{
        "title": "2.2.1 クラスターの登録",
        "excerpt":"クラスターを追加する機能である。 a) クラスター → 右上の”+クラスターの登録”ボタンをクリック。 b) 基本情報（クラスター名、k8sバージョン、ID、説明）を入力。 基本情報 説明 クラスター名 登録するクラスターの名前 Kubernetesバージョン クラスターにインストールされたKubernetesのバージョン情報。e.g）1.8.13 ID クラスター固有のID（ユーザー指定）、アラームメッセージのリダイレクト時に必要 説明 クラスターの説明 c) プロバイダー情報（プロバイダー、タイプ、地域）を入力。 アカウントのプロバイダーとタイプに応じて入力欄が変更される。 プロバイダー 説明 プロバイダー プロバイダーを選択 タイプ Kubernetesの使用タイプとして、MANAGED、PROVIER、GKE、EKS、AKSの中から選択 地域 Kubernetesがインストールされたサーバーのリージョン 追加入力 説明 Billing Account クラウドメータリングアカウントを選択 プロジェクトID Google Cloud Platformのアカウントが使用するプロジェクトID（GKEを使用するプロジェクト） d) エンドポイント情報（マスターアドレス、 Ingress ホストアドレス、 ノードポートURL, ノードポート範囲）を入力。 エンドポイント 説明 マスターURL Kubernetes APIのアドレス。 (“https://host:port” 形式を使用する。)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.1/",
        "teaser":null},{
        "title": "2.2.2 クラスターの変更",
        "excerpt":"  クラスターの基本情報、プロバイダー、モニタリング、クラスターのタイプを変更する機能である。 プロバイダーのアカウント、タイプ、リージョンは変更できない。   a) クラスター → クラスター選択 → 登録管理 → 変更ボタン → 修正完了後、保存ボタンをクリック。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 クラスターの削除",
        "excerpt":"  クラスター情報を削除する機能である。 該当クラスターを使用しているアプリケーションマップがある場合、削除することができない。   a) クラスター → クラスター選択 → 登録 → 削除ボタンをクリック。       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.3/",
        "teaser":null},{
        "title": "2.2.4 ボリューム",
        "excerpt":" Public Cloudのストレージおよび外部ストレージ情報を登録し、ボリュームステータスの監視サービスを提供する。   a) クラスター → クラスター選択 → ボリュームをクリック。                    ストレージ設定情報       説明                       [+] ボタン       ストレージ追加ページに移動                 名前       ストレージ名（ユーザー指定）                 タイプ       ストレージの種類 (NFS/EBS/Google Persistent Disk/Azure Disk)                 ストレージクラス名       k8s に登録された Class Name                 リクレームポリシー       ストレージボリュームのポリシー設定（Retain、Recyle、Delete）                 ステータス       ストレージの使用状態                          ボリューム設定情報       説明                       ボリューム名       PVC 名                 ステータス       PVCマウント状態                 使用量       PVの割り当てられた利用可能な量と使用量                 接続モード       PVアクセス権限                 Age       PVC 作成経過時間           ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.4/",
        "teaser":null},{
        "title": "2.2.5 ストレージの追加",
        "excerpt":"ボリュームを追加して使用することができる。 a) クラスター → クラスター選択。 → ボリュームをクリック → ストレージステータス行の右の＋ボタンをクリック。 b) クラスター、名前、説明、タイプ、ストレージプラグイン、リクレームポリシー、ストレージクラス名の順に記入。 ストレージ 登録情報 説明 名前 PV名 説明 PVユーザー説明 タイプ ストレージタイプ（Single、Shared） ストレージプラグイン ストレージの種類 (NFS, NFS Named, EBS, Google Persistent Disk, Azure Disk) リクレームポリシー PV使用ポリシー（RETAIN/ DELETE） タイプ 説明 Single １つのワークロードでしか使えないストレージ Shared 複数のワークロードの間で共有し使えるストレージ リクレームポリシー 説明 Retain PersistentVolumeClaim（PVC） が削除されても、 PersistentVolume（PV）内にデータが残る。 後で再利用可能だが、 再利用時にはPVを再登録する必要がある。 Delete PVCが削除されると、...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.5/",
        "teaser":null},{
        "title": "2.2.6 ストレージの変更",
        "excerpt":" 登録されたストレージ情報を変更する機能である。 ただし 、nfs-staticタイプのストレージは変更することができない。   a) クラスタ→クラスタ選択 → ボリューム → ボリュームアクションボタン → ストレージの編集をクリック。     b) 名前、 説明、 リクレームポリシー、 ストレージクラス名、 パラメータ値の変更が可能。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.6/",
        "teaser":null},{
        "title": "2.2.7 ストレージの削除",
        "excerpt":" 登録されたストレージ情報を削除する機能である。   a) クラスター → クラスター選択→ ボリューム → ボリュームアクションボタン → ストレージの削除をクリック。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.7/",
        "teaser":null},{
        "title": "2.2.8 デフォルトストレージの指定",
        "excerpt":" デフォルトストレージの指定機能である。 カタログのデプロイ時、ワークロードタイプが StatefulSet の場合、修正せずに直ちにデプロイする場合、ストレージボリュームが作られるデフォルトの位置である。 ストレージプラグインタイプがNFS Namedの場合、デフォルトストレージには設定きない。   a) クラスター → クラスター選択 → ボリューム → ボリュームアクションボタン → デフォルトストレージ指定をクリックする。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.2.8/",
        "teaser":null},{
        "title": "2.3 ワークスペース",
        "excerpt":" ビルド及びデプロイ、運用するワークスペースを割り当てる。ワークスペース別にユーザー、クラスター、ライブラリーの登録ができる。   a) 左側のメインメニュー → ワークスペース                    サービス設定       説明                       ワークスペース名       ワークスペースの名称（ユーザー指定）                 クラスター数       ワークスペースに割り当てたクラスター数                 メンバー数       ワークスペースを使うメンバー数                 システム名       システム名称                 説明       ワークスペースの説明          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.3/",
        "teaser":null},{
        "title": "2.3.1 ワークスペースの作成",
        "excerpt":" ワークスペースを作成する機能である。ワークスペース別にメンバー、クラスター、レジストリ（保存場所）の登録ができる。   a) 左側のメインメニュー → ワークスペース → 右上のワークスペース作成ボタンをクリックする。     b) サービスに使う名前、説明、色、レジストリ、クラスター、メンバーを登録する。     c) メンバー、クラスター追加はチェックしたものが登録される。      クラスターの変更         ユーザーの変更     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 ワークスペースの変更",
        "excerpt":" ワークスペース情報を変更する機能である。ワークスペース名、説明、表示色の変更ができ、該当サービスを使用するメンバー変更、ワークスペースに登録するクラスター編集ができる。   a) 左側のメインメニュー → ワークスペース → ワークスペースアクションメニュー (登録されているワークスペース行の右端のボタン)→ ワークスペース編集 → 変更完了後、変更ボタンをクリックする。     b) ワークスペース名、説明、色、メンバー、クラスタの変更ができる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 ワークスペースの削除",
        "excerpt":" ワークスペースを削除する機能である。削除時、ワークスペースにクラスターが登録されている場合、削除できない。ワークスペースの修正で全てのクラスターを削除すれば、ワークスペースが削除できる。   a) 左側のメインメニュー → ワークスペース → ワークスペースアクションメニュー(アカウント行の右端のボタン) → ワークスペース削除をクリックする    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.3.3/",
        "teaser":null},{
        "title": "2.4.ダッシュボード",
        "excerpt":"  ダッシュボードでは、カクテルクラウドで運用しているサービス情報が一目で確認できる。           要約情報       現在登録管理されているサービス、サーバー、クラスター、アラートの数を確認することができる。            リソースステータス       CPU、MemoryのTotal、リクエスト量、使用量、また Storage（Node, Pv）のTotal、使用量を確認することができる。            クラスターステータス       登録されたクラスター別のサービス、ワークロードの数を確認することができる。            クラスターの現在のコスト       使用中のクラスターの費用を確認することができる。            クラスターリソース割当率       使用中のクラスターで、クラスターリソース割り当て率（request）を確認することができる。            サービスのリソース割当量       使用中のサービス別にリソース（CPU/Memory）割り当て量を確認することができる。         ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/2.4/",
        "teaser":null},{
        "title": "3.ユーザー管理",
        "excerpt":"  現在のログインユーザー情報の確認および管理を行うことができる。      a) ページ右上のユーザーボタンをクリック。                  リスト       説明                       ID       現在使用中のアカウントのIDを確認することができる                 言語の選択       Korean、Japanese、English、Chineseから言語を選択することができる                 テーマ       LightとDarkテーマを変更することができる                 パスワードの変更       既存のパスワードや新規パスワードを入力し、 パスワードを変更することができる                 ユーザーマニュアル       カクテル機能を使用するためのヘルプマニュアルが提供される                 製品名       Cocktail製品名が表示される                 バージョン       現在のカクテルのバージョンを確認することができる                 ログアウト       現在使用中のアカウントをログアウトする          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/3/",
        "teaser":null},{
        "title": "4.サービス",
        "excerpt":"  サービスとワークロードを作成、管理する機能である。                   リスト       説明                              サービスグループのアクションメニュー                        サービス作成のポップアップ呼び出し          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4/",
        "teaser":null},{
        "title": "4.1 サービス管理",
        "excerpt":"  サービス、サービスグループ及びワークロードを管理する。   ㅤㅤㅤㅤㅤ                  リスト       説明                              論理的な単位で構成されたグループ。アクションメニューを活性化すると該当グループのグループ名の変更、位置を上下に移動、上下にグループ追加、グループ削除ができる。+ボタンをクリックするとサービスを作成することができる。          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1/",
        "teaser":null},{
        "title": "4.1.1 サービス",
        "excerpt":"  サービスの構成単位である。   論理ユニットでグループを構成し、グループ内にワークロードを配置する。   マップを構成しているクラスターのメータリング情報の確認や、ワークロードの監視情報を確認することができる。   デプロイタスクを作成してワークロードを作成したり、更新することができる。   a) 左側メインメニュー → サービス → サービスカードを選択してクリック。                       リスト       説明                              論理ユニットで構成されたグループ。 アクションメニューをアクティブ化すると、 該当グループでグループ名の変更、 カラム数の変更、右or左に移動、 右or左にグループ追加、グループ削除が可能。 +ボタンをクリックすると、 ワークロードを作成することができる。                        サービス内にデプロイされているワークロード。 ドラッグ＆ドロップを利用して自由に移動が可能。                        現在デプロイ中のワークロードを上の写真のように、 一目で確認できるよう簡略表示                        サービスにデプロイされたワークロード単位で使用中の CPU、 Memory、 Networkの監視サービスを確認できるメニュー。                        イメージのビルドからデプロイ作業まで一括実施が可能で、 デプロイ中のワークロードのイメージバージョンを変更して再デプロイすることも可能。また、 複数のワークロードを同時に一括でデプロイすることができる。                        Persistent Volumeが設定できるメニュー。                        Config Map、Secretなど、複数の設定ファイルを保存し利用することができる。                        サービス配布したワークロード単位に使用中のCPU、 Memory、 Networkについてのモニタリングサービスメニュー          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.1/",
        "teaser":null},{
        "title": "4.1.1.1 サービスのグループ管理",
        "excerpt":" サービスについてグループで管理する。該当グループにサービスを作成することができ、グループ名、色の変更、グループ追加、移動、削除ができる。   a) 左側のメインメニュー → サービス → サービスグループの ▼（アクションボタン）をクリックし、メニューを活性化する。                    リスト       説明                       グループ変更       グループ名、色の変更                 上に移動       グループを上に移動                 下に移動       グループを下に移動                 上にグループ追加       グループ上に新しいグループ作成                 下にグループ追加       グループ下に新しいグループ作成                 グループ削除       グループを削除（グループにサービスが存在すると削除不可）          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.1.1/",
        "teaser":null},{
        "title": "4.1.1.2 サービスの作成",
        "excerpt":"  サービスで新しいサービスを作成する。   a) 左側のメインメニュー → サービス → サービスの右側の＋ボタンをクリック。     b) 使用するクラスターを選択し、サービスグループとサービス名、Namespace名を指定してサービスを作成。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.1.2/",
        "teaser":null},{
        "title": "4.1.1.3 サービス名の変更",
        "excerpt":"  サービス名を変更する。   a) 左側のメインメニュー → サービス → サービスの右側の✎ボタンをクリック。     b) 活性化された名前の入力欄に変更内容を入力した後、Enterキーを押しサービス名を変更。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.1.3/",
        "teaser":null},{
        "title": "4.1.1.4 サービスの削除",
        "excerpt":"  サービスを削除する機能である。 デプロイ中のサーバーがあると、 サービスを削除することができない。   a) 左側のメインメニュー → サービス → サービスカード選択 → 右上のアクションボタンクリック後、サービスの削除をクリック。        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.1.4/",
        "teaser":null},{
        "title": "4.1.2 グループ管理",
        "excerpt":"  ワークロードをグループで管理する。該当グループにワークロードを作成することができる。グループ名の変更、グループの追加、移動、削除、カラム数の変更が可能である。   a) 左側のメインメニュー → サービス → サービスカード選択 → ワークロードグループの▼（アクションボタン）をクリックしてメニューを有効化する。                       リスト       説明                       グループ名変更       グループ名を変更                 カラム数変更       カラム数を変更（最小:1~最大:8）                 左に移動       グループを左に移動                 右に移動       グループを右に移動                 左にグループ追加       グループの左に新しいグループを作成                 右にグループ追加       グループの右に新しいグループを作成                 グループ削除       グループを削除（グループにサーバーがある場合は削除不可能）          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.1.2/",
        "teaser":null},{
        "title": "4.2 ワークロード",
        "excerpt":" サービスを構成する最小単位である。1つのワークロードがサービスになることもあり、複数のワークロードで1つのサービスを構成することもできる。   a) 左側のメインメニュー → サービス → サービスカードを選択すると、マップ内に構成されたワークロードが表示される。       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2/",
        "teaser":null},{
        "title": "4.2.1 ワークロードの作成",
        "excerpt":"グループ管理で、ワークロードを作成して実行する。 a) 左側のメインメニュー → サービス → サービスカード選択 → ワークロードグループの＋ボタン（ワークロード作成）をクリック。 ワークロードタイプを選択する。 b) 基本情報、Init Container、コンテナ、 インスタンス、Auto Scaling、Strategy Type (アップデート方法)、 サービスポート、 ボリュームマウント、ボリュームを設定し、作成ボタンをクリックしてワークロードを作成。 ワークロード基本情報の設定 項目 説明 名前 作成するワークロード名 グループ ワークロードが作成されるワークロードグループ タイプ ワークロードのインスタンスタイプ（Single/Multi） 説明 ワークロードの説明 InitContainer 作成 コンテナと同一だが、コンテナより先に実行されるコンテナ 初期化コンテナの右側の「＋ボタン」をクリック。 コンテナ名を入力し、 コンテナとして使用するイメージのビルドやイメージから選択し、使用するCPU/Memoryリソース値を定義する。（GPUで生成する場合、GPU値も設定する。） コンテナの起動時に、実行するコマンドを入力することができる。 コンテナの環境変数の値の入力、または Config Map / Secret を選択して設定することができる。 セキュリティポリシーを設定することができる。 コンテナのヘルスチェックを設定することができる。（Readiness Probeは設定しない） コンテナのLifeCycle Hookを設定することができる。 コンテナ作成 コンテナの右側の「＋ボタン」をクリック。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.1/",
        "teaser":null},{
        "title": "4.2.2 ワークロードの編集",
        "excerpt":" RunningまたはStopped状態のワークロードを修正して再デプロイする。   a) 左側のメインメニュー → サービス → サービスカード選択 → ワークロードをクリック。      b) 基本情報、コンテナ、インスタンス、Auto Scaling、Strategy Type (アップデート方法)、 サービスポート、 ボリュームマウント、ボリューム内容を修正し、変更ボタンを押し、 ワークロードを再デプロイする。   ワークロードがRunningの場合は、ワークロードタイプとコンテナのイメージの変更はできない。ただし、コンテナのイメージタグの変更は可能。これを変更するためには、ワークロードを停止する必要がある。ワークロード停止後、編集が可能になる。 タイプが Job の場合、Running/Complate時は変更が不可。タイプが Stateful Setの場合、Running時はボリュームテンプレートの変更が不可。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.2/",
        "teaser":null},{
        "title": "4.2.3 ワークロードインスタンス情報照会",
        "excerpt":"ワークロードインスタンスの情報を照会することができる。 リソース 情報 Instance 詳細情報、 ステータス情報、 イベント情報、 デプロイ情報、 ウェブターミナル（コンテナ）、 ログ（コンテナ） Service 詳細情報、イベント情報、デプロイ情報 Persistent Volume Claim 詳細情報、ボリューム詳細情報、デプロイ情報 Controller 詳細情報、イベント情報、デプロイ情報、Auto Scaling（Deploymentsのみ該当）情報（オプション） Ingress 詳細情報、デプロイ情報 a) 左側のメインメニュー → サービス → サービスカード選択 → ワークロード選択。 b) インスタンス名をクリック c) インスタンス → コンテナにウェブターミナルで接続 。 d) インスタンス → コンテナログ インスタンスアクションメニュー e) インスタンスのアクションボタンをクリック → ステータス情報をクリック。 f) インスタンスのアクションボタンをクリック → イベント情報をクリック。 g)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.3/",
        "teaser":null},{
        "title": "4.2.4 ワークロードの停止",
        "excerpt":"  デプロイされたワークロードを停止する。ワークロードを停止すると、PODは削除される。   a) 左側のメインメニュー → サービス → サービスカード選択 → Running状態のワークロードアクションメニューをクリック → 停止をクリック。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.4/",
        "teaser":null},{
        "title": "4.2.5 ワークロードの起動",
        "excerpt":"  停止したワークロードを起動する。   a) 左側のメインメニュー → サービス → サービスカード選択 → Stoppedのワークロードアクションメニューをクリック → 起動をクリック。      b) ワークロード詳細の右側実行アクションボタンでも実行できる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.5/",
        "teaser":null},{
        "title": "4.2.6 ワークロードの再起動",
        "excerpt":"  ワークロードを再起動する。コンピュータのRebootのような概念である。   a) 左側のメインメニュー → サービス → サービスカード選択 → Runningのワークロードアクションメニューをクリック → 再起動をクリック。      b) ワークロード詳細の右側実行アクションボタンでも実行できる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.6/",
        "teaser":null},{
        "title": "4.2.7 ワークロードの削除",
        "excerpt":"  停止したワークロードを削除する。   a) 左側のメインメニュー → サービス → サービスカード選択 → Stoppedのワークロードアクションメニューをクリック → 削除をクリック。      b) ワークロード詳細の右側実行アクションボタンでも実行できる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.2.7/",
        "teaser":null},{
        "title": "4.3 モニタリング",
        "excerpt":"  ワークロード、POD、コンテナ別のCPU、メモリ、ネットワークの使用量を照会することができる。   a) 左側のメインメニュー → サービス → サービスカード選択 → モニタリングをクリック。      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.3/",
        "teaser":null},{
        "title": "4.4 パイプライン",
        "excerpt":"パイプライン機能は、イメージビルドからワークロードのデプロイまで一度に進めることができる。 また、デプロイ中のワークロードのイメージバージョンを変更して再デプロイすることができる。 a) 左側のメインメニュー → サービス → サービスカード選択 → パイプラインをクリック。 パイプラインメニュー 説明 バッチ実行 パイプラインのタスクを一括で実行 実行 該当パイプラインのタスクを実行 イメージメニュー ビルド 説明 イメージタグ X レジストリにあるタグ入力して、該当バージョンでワークロードをデプロイ 指定 ⃝ イメージのバージョンで指定バージョンをワークロードにデプロイ 最新 ⃝ イメージのバージョンで最新バージョンをワークロードにデプロイ ビルド＆デプロイ ⃝ 新たにビルドを行い、その後該当イメージバージョンでワークロードにデプロイ b) パイプライン実行 1. パブリックイメージでワークロードを作成した場合 イメージタグを入力後、「実行」または「バッチ実行」をクリック （deployしたバージョンと入力しバージョンが異なる場合のみ実行可能。ただし、latestを除く） 2. ビルドしたイメージでワークロードを作成した場合 指定したイメージでデプロイ パイプラインタスクリストの右側で「指定」およびイメージを選択した後、 「実行」 または「バッチ実行」をクリック（deployされたバージョンと入力したバージョンが異なる場合のみ実行可能） 新たなビルドタスク後、該当イメージでデプロイ パイプラインタスクリストの右側で「ビルド＆デプロイ」を選択した後「実行可否」をチェック。その後、「実行」または「バッチ実行」をクリック（実行可否がチェックされている場合のみ実行可能） 最新のイメージでデプロイ パイプラインタスクリストの右側で「最新」を選択した後、「実行」または「バッチ実行」をクリック（deployされたバージョンと入力したバージョンが異なる場合のみ実行可能） ビルド編集画面の移動およびログ表示 ビルドイメージ名をクリックすると、ビルド編集画面に移動する。 ビルドタグ名をクリックすると、ログを表示することができる。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.4/",
        "teaser":null},{
        "title": "4.5 Persistent Volume",
        "excerpt":" Persistent Volumeの現状及び、作成、削除機能を提供する。   a) 左側のメインメニュー → サービス → サービスカード選択 → Persistent Volume                     リスト       説明                       ボリューム名       作成したPersistent Volume名、クリック時、ストレージボリュームの詳細画面に移動                 ボリュームタイプ       ボリュームタイプ（Single, Shared）                 ステータス       ボリュームのステータス（Ready, Mounted）                 使用量       使用量、リクエスト値、合計                 Age       ボリュームの作成時間（かかる時間）                 ボリューム作成       ストレージボリューム作成画面に移動                   ストレージボリュームの詳細             ストレージボリュームのアクションメニュー        a) ボリューム要求情報     b) ボリューム情報     c) ストレージ情報    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.5/",
        "teaser":null},{
        "title": "4.5.1 Persistent Volumeの作成",
        "excerpt":" Persistent Volumeを作成する。   a) 左側のメインメニュー → サービス → サービスカード選択 → Persistent Volume                     リスト       説明                       ストレージボリュームタイプ       ボリュームタイプ（Single, Shared）                 ストレージ       クラスターに登録されたストレージリストを表示                 アクセスモード       Persistent Volume TypeがSingleの場合、ReadWriteOnce、Sharedの場合、ReadWriteMany、ReadOnlyManyを選択                 名前       作成するストレージボリューム名                 容量       作成するストレージボリュームのサイズ（GB）          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.5.1/",
        "teaser":null},{
        "title": "4.5.2 Persistent Volumeの削除",
        "excerpt":" Persistent Volumeを削除する。   a) 左側のメインメニュー → サービス → サービスカード選択 → Persistent Volume → ストレージボリュームアクションメニュー → 削除ボタンをクリック    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.5.2/",
        "teaser":null},{
        "title": "4.6 設定情報",
        "excerpt":" サービス単位で変数の値をkey=valueで保存し、ボリュームのように使用することができる。   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定をクリック。                      メニュー       説明                       Config Map       Config Mapの登録、編集、削除管理メニュー                 Secret       Secretの登録、編集、削除管理メニュー          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6/",
        "teaser":null},{
        "title": "4.6.1 Config Map",
        "excerpt":"  サービスでConfig Fileを Map形式で保存し、ボリュームとして使用することができる。   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Config Mapをクリック。                     項目       説明                              Config Map作成ページに移動                 名称       Config Map名（ユーザー指定）                 説明       Config Mapの説明（ユーザー指定）                        Config Mapのアクションメニュー          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.1/",
        "teaser":null},{
        "title": "4.6.1.1 Config Mapの作成",
        "excerpt":" サービスでConfig Mapを作成する。   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Config Map → Config Map作成ボタンをクリックして登録ページに移動。      b) 名前とデータの値を入力し、右上の作成ボタンを押してConfig Mapを作成。                      項目       項目                       名称       Config Map名を入力する欄である。入力後は編集不可能                 説明       Config Mapの説明を入力する欄である。                 設定値の追加ボタン       Config Mapのデータを追加することができるボタン                 KEY       Config MapのKey値                 VALUE       Config MapのValue値          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.1.1/",
        "teaser":null},{
        "title": "4.6.1.2 Config Mapの変更",
        "excerpt":" サービスに追加されたConfig Mapのデータを修正することができる。（名前の変更は不可）   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Config Map → Config Mapアクションメニュー → Config Mapの変更をクリック     b) 値の変更後、 変更ボタンをクリックし、Config Mapを修正。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.1.2/",
        "teaser":null},{
        "title": "4.6.1.3 Config Mapの削除",
        "excerpt":" サービスでConfig Mapを削除する。   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Config Map → Config Mapアクションメニュー → Config Mapの削除をクリック     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.1.3/",
        "teaser":null},{
        "title": "4.6.2 Secret",
        "excerpt":" サービスにおいてSecret Fileで保存し、環境変数およびボリュームとして使用することができる。   a) 左側のメインメニュー → サービス → サービスガード選択 → 設定情報 → Secretをクリック。                     項目       説明                              Secret作成ページに移動                 名前       Secret名（ユーザー指定）                 説明       Secretの説明（ユーザー指定）                        Secretのアクションメニュー          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.2/",
        "teaser":null},{
        "title": "4.6.2.1 Secret追加",
        "excerpt":"  サービスにSecretを追加する。   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Secret → Secret作成をクリックし、 登録ページに移動。      b) 名前、説明、値を入力し、 右上の作成ボタンを押してSecretを作成。                     リスト       説明                       名前       Secret名を入力する欄である。入力後は編集不可能                 説明       Secret設定の説明を入力する欄である。                 タイプ       Generic、DockerRegistry、tls設定を指定することができる。                 設定値の追加ボタン       Secretデータを追加することができるボタン                 KEY       SecretのKey値                 VALUE       SecretのValue値          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.2.1/",
        "teaser":null},{
        "title": "4.6.2.2 Secretの変更",
        "excerpt":"  サービスに追加されたSecretのデータを修正することができる。（名前は変更不可）   a) 左側のメインメニュー → サービス → サービスカード選択 → 設定情報 → Secret → Secretアクションメニュー → Secretの変更をクリック      b) 値の変更後、変更ボタンをクリックしてSecretを編集。（Secretの値は、セキュリティの関係で非表示）     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.2.2/",
        "teaser":null},{
        "title": "4.6.2.3 Secret削除",
        "excerpt":"  サービスでSecretを削除する。   a) 左側のメインメニュー → サービス → サービスガード選択 → 設定情報 → Secret → Secretアクションメニュー → Secretの削除をクリック     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.6.2.3/",
        "teaser":null},{
        "title": "4.7 サービス公開",
        "excerpt":" 作成したワークロードに Cluster Ip、Node Port、Loadbalancer、Ingress 設定を追加することができる。   a) 左側メインメニュー → サービス → サービスカード選択 → サービスをクリックする。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.7/",
        "teaser":null},{
        "title": "4.7.1 サービス公開設定",
        "excerpt":"作成したワークロードに Cluster Ip、Node Port、Loadbalancer を作成する。 a) 左側メインメニュー → サービス → サービスカード選択 → サービス公開をクリックする。 b) 画面サービスラインの追加ボタンをクリックする。 c) サービスタイプとポートを接続するワークロードを指定する。 サービスポート サービスタイプは Cluster Ip、Node Port、Loadbalancerを指定でき、Loadbalancerタイプの場合、Internal LBが指定できる。 項目 説明 Cluster IP Pod 内部通信ネットワーク Node Port 外部公開ネットワーク Loadbalancer ロードバランサーネットワーク Sticky Session 特定クライアントからのセッションを維持するオプション タイムアウト(秒) Sticky Session の維持時間 項目 説明 名称 ポート名を定義 プロトコル TCP、UDP ターゲットポート コンテナポートを指定 サービスポート...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.7.1/",
        "teaser":null},{
        "title": "4.7.2 Ingress 設定",
        "excerpt":" 作成したサービスにIngress 設定を追加することができる。   a) 左側メインメニュー → サービス → サービスカード選択 → サービスをクリックする。     b) Ingress の追加ボタンをクリックする。             Ingress            Ingress ホストの追加は、対象ホストでデフォルトまたは直接入力を選択し、追加することができる。             Ingress TLS の追加は、Secret選択(Secretを TLSタイプで作成したものが存在しなければならない) 対象ホスト(直接入力のみ可能)を選択し、追加することができる。        d) Ingress の追加後、アクションメニューでデプロイ情報の確認、または、編集ボタンで修正できる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/4.7.2/",
        "teaser":null},{
        "title": "5.ビルド管理",
        "excerpt":"  Dockerイメージのビルドタスクを管理する。   アプリケーションのダウンロード、ソースファイルのビルド、イメージファイルのビルドを行い、Haborレジストリにアップロードする。   a) 左側のメインメニュー → ビルド選択して該当ページに移動。                    リスト       説明                       ビルド生成       ビルド作成ボタン                 Filter       ビルドを検索して照会                 ビルド名       ビルドの名前                 イメージ名       保存されたDockerイメージ名                 ビルド数       ビルドタスク数                 ステータス       ビルドの実行ステータスを表示                 最新のビルド実施日時       ビルドが最後に実行された日付を表示                 イメージサイズ       保存されたDockerイメージのサイズ。（MB単位）                        ビルドアクションメニュー（タスク設定の変更、ヒストリー、ビルド実行、ビルドキャンセル、ログビュー、タスクの削除）          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5/",
        "teaser":null},{
        "title": "5.1 ビルドタスクの作成",
        "excerpt":"Dockerイメージのビルドタスクを作成する。 アプリケーションのダウンロード、アプリケーションのビルド、イメージのビルドの3つを選択することができる。 a) 左側のメインメニュー → ビルド画面で[+]ボタンをクリックし、該当ページに移動 b) 基本情報、アプリケーションダウンロード、アプリケーションビルド、イメージビルドの内容を作成し、作成ボタンを押してビルドタスクを作成 ビルド作成段階 説明 アプリケーションのダウンロード ビルドに必要なソースをダウンロード アプリケーションのビルド ソースのコンパイルが必要な場合に使用 コマンド - ビルドしながら実行するタスク ホストパス - タスクが行われるコンテナパスとマウントされるホストパス Working dir - 実際にコンテナ内で作業するパスで、 コンテナパスに合わせる イメージ - ビルド時に使用するイメージ イメージのビルド 作業したソースでDockerファイルを作ってイメージを作成し、　該当イメージをレジストリのストレージに保存するステップ ビルドの基本情報 基本情報 説明 ビルド名 作成するビルドの名前 最近のアクション ビルドの最近の動作状態 ステータス ビルドの現在の状態 アプリケーションのダウンロード アプリケーションのダウンロード 説明 リポジトリ ソースファイルをダウンロードするバージョン管理ツールの種類。 現在のバージョンではGitのみサポート プロトコル リポジトリが提供するHTTP / HTTPSプロトコルをサポート Gitリポジトリタイプ...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.1/",
        "teaser":null},{
        "title": "5.2 ビルドタスクの編集",
        "excerpt":" ビルドタスクを編集する。   a) 左側のメインメニュー → ビルド → ビルドアクションメニュー（活性化）→ タスク設定変更を選択して、 該当ページに移動  b) 基本情報、アプリケーションダウンロード、アプリケーションビルド、イメージビルド内容を修正し、修正ボタンをクリックし、変更内容を反映する。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.2/",
        "teaser":null},{
        "title": "5.3 ビルド履歴",
        "excerpt":" 該当ビルドタスクのヒストリーページに移動し、ビルド実行のヒストリーを確認することができる。また、ビルドログを確認することができる。   a) 左側のメインメニュー → ビルド → ビルドアクションメニュー → ビルド履歴を選択して、 該当ページに移動     b) アクションメニュー → ログビューをクリックし、ビルドログを確認    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.3/",
        "teaser":null},{
        "title": "5.4 ビルド実行",
        "excerpt":" ビルドタスクを実行する。 ビルドを実行すると、 アプリケーションダウンロード、 アプリケーションビルド、 イメージビルドを一度に実行する。   a) ビルドリストで実行するビルドのビルドアクションメニュー → 「ビルド実行」を選択して、ビルドタスクを実行     b) 説明を入力して、OKボタンをクリックすると、ビルド作業を実行する。     c) ビルド実行時、現在のアクションが変更され、ビルドログ画面が表示される。   ビルド作成時、チェックボックスで選択された順に実行され、各ステップのビルドプロセスを確認することができる。 （DOWNステップでエラーが発生した場合、次のステップに進むことができない。）   ビルド実行タスクが”CREATE IMAGE STEP DONE.” というログが表示されたら、 イメージビルドが正常に終了したということである。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.4/",
        "teaser":null},{
        "title": "5.5 ビルドのキャンセル",
        "excerpt":" ビルドタスクを取り消しする。 ビルドタスクが実行状態（RUNNING）の時のみ取り消すことができる。   a) ビルドリストでキャンセルするビルド作業のビルドアクションメニュー → [ビルドキャンセル]を選択して、ビルド作業をキャンセル     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.5/",
        "teaser":null},{
        "title": "5.6 ビルドログ",
        "excerpt":" ビルドタスクの直近の実行ログを表示する。 ビルドが実行中であれば、 実行中のログを確認することができる。   a) ビルドリストで対象ビルドタスクのビルドアクションメニュー → 「ログビュー」を選択して、 実行ログを確認     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.6/",
        "teaser":null},{
        "title": "5.7 ビルドタスクの削除",
        "excerpt":" ビルドタスクを削除する。   a) ビルドリストで削除する対象ビルドタスクのビルドアクションメニュー → 「タスク削除」を選択して、 ビルドタスクを削除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/5.7/",
        "teaser":null},{
        "title": "6.カタログ",
        "excerpt":"  サービス構成をテンプレート化して、簡単にワークロード作成およびデプロイ、管理を行うことができる機能である。   複数のワークロードを一度にまとめて使用する場合は、カタログ機能を使用する。   カタログは、サービスカタログとプラットフォームカタログに分けられる。                     カタログメニュー       説明                       サービスカタログ       ユーザーが作成したカタログ                 プラットフォームカタログ       カクテルクラウドに組み込まれた公式カタログ                 Filter Catalog       カタログ名で検索して照会                 テンプレート       サービスを構成しているワークロードコレクション                 デプロイ       カタログでワークロードをデプロイ                 編集       カタログの内容を編集          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6/",
        "teaser":null},{
        "title": "6.1 カタログの保存",
        "excerpt":"  カタログを作成して、必要なサーバーをまとめて一度にデプロイすることができる。 ワークロードコンテナイメージがビルドされる場合は、 イメージのみ保存し、 パブリックイメージに変換してカタログとして保存する。 保存されたカタログは、 サービスカタログで確認することができる。   カタログ保存時、設定のConfig Map、Secretもテンプレートとして保存する。 （ただし、 Secretはセキュリティで値は保存しない）   a) サービスメニューで、カタログに保存するサービスを選択     b) 画面の右上の実行ボタンをクリックし、「カタログに保存」ボタンをクリック     c) 新規テンプレートの作成時は「新規」カテゴリーを、 既存テンプレートの更新時は「既存」カテゴリーを選択し、 バージョン、サマリー、変更内容を作成してから、下の「保存」ボタンをクリック 。（編集入力フィールドは、Mark Downファイル形式で、該当ファイル作成方法はページ右の「Mark Down support」を押して確認。）  d) 新規テンプレートの作成時、Shared Typeを選択するが、ワークスペースタイプの場合は、同一ワークスペース内で共有され、システムタイプの場合は他のワークスペースに移動してもテンプレート一覧が共有される。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.1/",
        "teaser":null},{
        "title": "6.2 カタログのデプロイ",
        "excerpt":"  作成したカタログをデプロイすることができる。 不要なインスタンスを除外または編集してデプロイすることができる。   a) カタログ → デプロイするテンプレートの「デプロイ」ボタンをクリック。     b) テンプレートカテゴリーでサービスグループ、 クラスター、 サービスを選択後、「デプロイ」をクリック。 不要なインスタンスは除外してデプロイすることができる。           新規のサービスデプロイする時、サービスグループ、クラスターを選択し、サービス、ネームスペース名を作成して、デプロイすることができる。             既存のサービスデプロイする時、サービスグループ、サービスを選択し、デプロイすることができる。        c) Secretの場合は、セキュリティのため値は保存していないため、デプロイ前に値を入力する必要がある。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.2/",
        "teaser":null},{
        "title": "6.3 カタログの編集",
        "excerpt":"  作成したカタログの内容を編集することができる。テンプレートのバージョン、サマリー、編集内容を修正することができるほか、各インスタンスのデプロイ情報を修正することができる。   a) カタログ → 編集するテンプレートの「編集」ボタンをクリック     b) 修正するテンプレートのバージョン、サマリー、編集内容を修正し、画面右上の「保存」ボタンをクリックしてインスタンスのデプロイ情報を修正することができる。     c) Config MapとSecretは、編集画面で編集することはできず、内容の確認のみ可能。     d) ワークロード編集時、コンテナの環境設定とボリューム、ボリュームマウントは、編集することができず、内容の確認のみ可能。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.3/",
        "teaser":null},{
        "title": "6.4 カタログの削除",
        "excerpt":"  不要なカタログを削除することができる。 （カクテルカタログは削除できない）   a) カタログ → 削除するテンプレートの「編集」ボタンをクリック     b) 削除するテンプレートのバージョンを選択してから、「削除」ボタンをクリック。該当テンプレートバージョンが削除される。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.4/",
        "teaser":null},{
        "title": "6.5 カタログのエクスポート",
        "excerpt":" 保存されているカタログをエクスポートすることができる。 （プラットフォームカタログはエクスポート不可）   a) カタログ → エクスポートするテンプレート「編集」ボタンをクリック。     b) 画面右上の「エクスポート」ボタンをクリック。該当カタログが「カタログ名-バージョン.zip」の形でダウンロードされる。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.5/",
        "teaser":null},{
        "title": "6.6 カタログのインポート",
        "excerpt":" エクスポート済みのカタログファイルをインポート機能でカタログとして作成することができる。（プラットフォームカタログはインポート不可）   a) カタログ → インポート ボタンをクリック。     b) “Choose File” ボタンをクリックし、インポート対象のカタログ圧縮zipファイルを選択し、”保存”ボタンをクリック。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/6.6/",
        "teaser":null},{
        "title": "7.クラスター",
        "excerpt":"  クラスターの登録管理とノードおよびサービス単位の監視、ボリューム、アラーム、メータリングサービスが提供される。                  クラスタメニュー       説明                       ノード       ノード全体のCPU、メモリ、ネットワークの使用量と個別ノードの監視サービス                 アプリケーション       アプリケーション全体のCPU、メモリ、ネットワークの使用量とワークロードの監視サービス                 ボリューム       ストレージ及びボリュームサービス                 アラート       該当クラスターのアラートサービス                 メータリング       クラスターコストとリソース別コストサービス                 登録管理       クラスター情報の紹介、管理          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7/",
        "teaser":null},{
        "title": "7.1 クラスターの照会",
        "excerpt":"  システム管理者から割り当てられたKubernetesのクラスターリスト情報を照会する機能である。   a) クラスター → ソートボタンをクリックして、並べ替えの基準を選択。                    クラスター設定       説明                       クラスター       クラスタータイプ                 ノード       クラスターのノード数                 CPU       クラスターのCPU全体の割当量                 メモリ       クラスターのメモリ全体の割当量                 サービス       クラスターのサービスマップ（Namespace）の数                 ワークロード       クラスターでデプロイ中のワークロードの数          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7.1/",
        "teaser":null},{
        "title": "7.2 ノード",
        "excerpt":"  ノード全体の Disk、CPU、ネットワーク、メモリの総使用量と各ノードのラベル、状態情報などを照会することができる画面である。 ノード名をクリックすると、ノードの詳細情報を照会することができる。   a) クラスター → クラスター選択 → ノードをクリック。     b) ノードリストからノード名をクリックして、ノード詳細情報を確認。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7.2/",
        "teaser":null},{
        "title": "7.3 アプリケーション",
        "excerpt":"  アプリケーション全体のCPU、メモリ、ネットワークの総使用量と、各サービスのNamespace、インスタンスのステータスなどを照会することができる画面である。 サービス名をクリックすると、該当サービスマップのページに移動できる。   a) クラスター → クラスター選択 → サービスをクリック。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7.3/",
        "teaser":null},{
        "title": "7.4 アラート",
        "excerpt":"  クラスターに関するイベントをアラートとして受信することができる。   a) クラスター → クラスター選択 → アラートをクリック。     b) アラート名をクリックすると、 詳細内容の確認が可能。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7.4/",
        "teaser":null},{
        "title": "7.4.1 アラートリスト",
        "excerpt":"アラートは、次のリストから発生条件が持続時間だけ継続した場合に発生する。 * AlertManager アラート ID  ALM-001  レベル warning アラート名 AlertmanagerDown 持続時間 5分 発生条件 Alertmanagerメトリックの収集ができない場合に発生 処理 PrometheusのログとAlertmanagerのログとイベントを確認する。 必要な場合には、Podを再起動する。 アラート ID  ALM-002  レベル warning アラート名 AlertmanagerFailedReload 持続時間 10分 発生条件 Alertmanagerの設定変更時、 設定の再読み込み処理失敗時に発生 処理 そのPodのログを確認して ConfigMapの設定エラーを修正する。 * ETCD3 アラート ID  ETC-001  レベル  critical  アラート名 InsufficientMembers 持続時間 3分 発生条件 ETCDメトリックの収集ができない場合に発生 処理 ETCDクラスタの状態を確認する。 Prometheusのログと、そのノードの etcd状態を確認する。 アラート ID  ETC-002 ...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/7.4.1/",
        "teaser":null},{
        "title": "8.システム運用",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8/",
        "teaser":null},{
        "title": "8.1 Kubernetes as a service(Kaas) クラスター構成",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1/",
        "teaser":null},{
        "title": "GKEクラスターの作成",
        "excerpt":"GKEクラスターを作成する方法を説明します。 Google Kubernetes Engine(GKE)にログイン https://cloud.google.com/kubernetes-engine/ で Google cloud にログインします。 サービスアカウントの作成 1. IAMおよび管理者のサービスアカウントを作成します。 サービスアカウントには、次の役割が必要です。 project/viewer kubernetes-engine/admin service-account/user 役割ベースのアクセス制御(Identity and Access Management)を使用するための必要条件： RBAC生成時の前提条件の要素が必要. 次のコマンドを実行して、Kubernetesで役割を作成する権限をユーザに付与する必要があります。 [USER_ACCOUNT]は、ユーザーの電子メールアドレスです。 参照: https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control kubectl create clusterrolebinding cluster-admin-binding \\ --clusterrole cluster-admin --user [USER_ACCOUNT] or kubectl create clusterrolebinding cluster-admin-binding \\ --clusterrole cluster-admin \\ --user $(gcloud config get-value account) サービスアカウントの作成を選択します。 参照:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.1/",
        "teaser":null},{
        "title": "AKSクラスターの作成",
        "excerpt":"AKSクラスタを作成する方法を説明します。 Azure Portal + Azure Cli を使用した AKS(Azure Kubernetes Service) クラスタの作成 ユーザー認証 (OAuth) のために Azure AD(Active Directory) を使用するように AKS(Azure Kubernetes Service) を設定する必要があります。 Azure Kubernetes Service と Azure Active Directory 統合インストール Azureにログイン https://portal.azure.com で Azure Portal にログインします。 事前準備 Azure Active Drectory が用意されている必要があります。 (Azure Active Directoryから新しいテナントを作成) Azure cli がインストールされている必要があります。 (Install the Azure...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.2/",
        "teaser":null},{
        "title": "EKSクラスターの作成",
        "excerpt":"8.1.5 EKS クラスタの作成 Quick Start 8.1.5 EKS クラスタを作成 NAT Gateway を使用する EKS クラスタを作成する方法 Amazon Elastic Container Service for Kubernetes (Amazon EKS) を使用すると、AWS の Kubernetes を使用して、コンテナ化されたアプリケーションを簡単にデプロイ、管理および拡張することができます。 参照 : Amazon Elastic Container Service for Kubernetes(EKS) クラスタの作成 Amazon EKS ログイン Amazon EKS にログインします。 Amazon EKS 必須条件 Amazon EKSクラスタを作成する前に、Kubernetesが AWSリソースの作成時に利用できるIAMロールを作成しなければならない。 AWS管理者権限がない場合は、必要な役割/ポリシー/許可を要求しなければならない。 参照 : EKS...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.3/",
        "teaser":null},{
        "title": "EKSクラスターポリシー/権限",
        "excerpt":"EKS 管理の役割 (EKS 作成時に必要な役割) の作成 IAM(Identity and Access Management) で 役割(Roles) を選択する。 Roles 画面で [Create role] を選択する。 Create role 画面の Select type of trusted entity セクション : AWS service を選択する。 Create role 画面の Choose the service that will use this role セクション : EKS を選択する。 Create role 画面の Select your...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.4/",
        "teaser":null},{
        "title": "EKSクラスターの作成 Quick Start",
        "excerpt":"1. 必要な Role(役割) / Policy(ポリシー) を作成 a. EKS 管理ロールの作成 b. IAM(services) &gt; Roles &gt; Create role 画面で i. EKS 選択 : AmazonEKSClusterPolicy , AmazonEKSServicePolicy (default に設定されている) ii. Next: Permissions &gt; Next: Tags &gt; Next: Revies iii. Review 画面で 1) Role name : EKSClusterRole 2) Create role をクリック c. EKS 管理ポリシーを作成する。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.5/",
        "teaser":null},{
        "title": "EKS NAT Gateway 設定",
        "excerpt":"EKS NAT Gateway 構成図 Name ルール zone に区分されている場合、zone 名称を使用する。 EKS Cluster name : cocktail-eks-cluster (重複不可) VPC name : eks-cluster-vpc Subnets name : - availability zone A : Public subnet-&lt;A zone&gt;-nat1 , Private subnet-&lt;A zone&gt;-nat1 - availability zone B : Public subnet-&lt;B zone&gt;-nat2 , Private subnet-&lt;B zone&gt;-nat2 Route Tables : -...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.6/",
        "teaser":null},{
        "title": "AZURE FILE 共有設定",
        "excerpt":"AZURE Storage Accounts Storage Accounts は Azure File 共有または、Blob や Queue などの他のストレージリソースを配置することができるストレージの共有プールです。 ストレージアカウントに含めることができる共有の数に制限はありません。共有で保存できるファイル数に制限はなく、ストレージアカウントの最大容量まで保存することができます。 1. 左側のメニューまたは Home 画面で Storage accounts を選択する。 2. Storage accounts +Add を選択する。 Create storage account - 設定 1. Basics - 次のオプションを設定する。 Azure ストレージは、可用性、セキュリティ、耐久性、拡張性と冗長性に優れたクラウドストレージを提供する Microsoft 管理サービスです。 Azure ストレージには、Azure Blob (オブジェクト)、Azure Data Lake ストア Gen2、Azure ファイル、Azure キューとAzure テーブルが含まれます。 ストレージアカウントの費用は、以下で選択した使用方法とオプションによって異なります。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.1.7/",
        "teaser":null},{
        "title": "Cube を使ったクラスターの構成",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2/",
        "teaser":null},{
        "title": "Cocktail Installation on On-Premises",
        "excerpt":"事前準備 インストール前に、インスタンスの準備及び以下のプログラムを予めインストールする必要があります。インストールされていない場合はエラーメッセージが表示されます。 1) 提供された cube バイナリをどのディレクトリでも利用できるように、環境変数 path の設定をする。 2) Docker ダウンロード後、インストール : Get Docker CE for CentOS インストール 1. インストールのために空のディレクトリを作成し、そのディレクトリに移動する。 # mkdir /Desktop/cube # cd /Desktop/cube 2. cube コマンドの -p Flag を使用して、各 Provider のインストール script を download して初期化する。 Provider list onpremise aws azure gcp aliyun aks eks gke # cube...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.1/",
        "teaser":null},{
        "title": "Cocktail Installation on AWS",
        "excerpt":"事前準備 インストール前に、インスタンスの準備及び以下のプログラムを予めインストールする必要があります。インストールされていない場合はエラーメッセージが表示されます。 1) 提供された cube バイナリをどのディレクトリでも利用できるように、環境変数 path の設定をする。 2) Docker ダウンロード後、インストール : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS) を準備する必要があります。 インストール 1. インストールのために空のディレクトリを作成し、そのディレクトリに移動する。 # mkdir /Desktop/cube # cd /Desktop/cube 2. cube コマンドの -p Flag を使用して、各 Provider のインストール script を download して初期化する。 Provider list onpremise aws azure gcp...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.2/",
        "teaser":null},{
        "title": "Cocktail Installation on Azure",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Files Service가 준비되어...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.3/",
        "teaser":null},{
        "title": "Cocktail Installation on GCP",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.4/",
        "teaser":null},{
        "title": "Cocktail Installation on Aliyun",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.5/",
        "teaser":null},{
        "title": "Cocktail Installation on AKS",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Storage Account(Azure File)가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.6/",
        "teaser":null},{
        "title": "Cocktail Installation on EKS",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.7/",
        "teaser":null},{
        "title": "Cocktail Installation on GKE",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) GKE 서비스 계정 키가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.8/",
        "teaser":null},{
        "title": "CUBEクラスタータイプ",
        "excerpt":"클러스터의 사용 규모와 HA 구성 여부에 따라 타입을 구분 Large(HA) : 워커 노드 250대 이상, External ETCD 클러스터 구성, Shared Storage 이중화 옵션 Medium(HA) : 워커 노드 10 ~ 250대 규모, Stacked ETCD 구성, Shared Storage 이중화 옵션 Small : 워커노드 10대 미만 규모, 단일 마스터(백업 구성), Shared Storage 이중화...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.2.9/",
        "teaser":null},{
        "title": "Cube CLI",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3/",
        "teaser":null},{
        "title": "`init` command",
        "excerpt":"init는 Cocktail Cluster를 설치하려는 플랫폼에 맞는 cube.toml 을 다운로드한다. Usage cube init [flags] Flags [ provider ] provider (필수) --provider, -p Cocktail Cluster를 설치할 플랫폼의 이름을 지정한다. 현재 버전에서 지원하는 provider 목록은 아래와 같다   flag 값 Provider onpremise On-premise aws Amazon Web Service azure Microsoft Azure gcp Google Compute...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.1/",
        "teaser":null},{
        "title": " `cluster get-config` command",
        "excerpt":"cluster get-config는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster의 설치 정보 파일을 다운로드한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.10/",
        "teaser":null},{
        "title": "`cluster delete` command",
        "excerpt":"cluster delete는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 삭제한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할 수 있다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.11/",
        "teaser":null},{
        "title": "`cluster set-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 설치 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.12/",
        "teaser":null},{
        "title": "`cluster del-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 삭제 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.13/",
        "teaser":null},{
        "title": "`destroy` command",
        "excerpt":" destroy는 서버 인스턴스에서 Cocktail Cluster를 제거 한다.     Prerequisite  Cocktail Cluster 설치 상태.create command   Usage      cube destory  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.14/",
        "teaser":null},{
        "title": "`create` command",
        "excerpt":"create는 Cocktail Cluster를 init으로 준비한 플랫폼에 설치한다. Prerequisite init command Usage cube create Cocktail Cluster를 설치한다. Flags [ target ] Cocktail Cluster를 설치할때 상세정보를 tail -f log/cube.log로 확인할 수 있습니다. target (선택) [ registry | storage | cocktail | addon ] --target 설치 module을 지정 할 수 있다. Cocktail module을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.2/",
        "teaser":null},{
        "title": "`status` command",
        "excerpt":" status는 Cocktail Cluster의 현재 상태를 출력한다.     Usage   cube status   Output      etcd 상태   node 상태   Kubernetes pod 상태   cocktail system pod 상태   cocktail addon pod 상태   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.3/",
        "teaser":null},{
        "title": "`login` command",
        "excerpt":"login는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online에 로그인 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Usage cube login [flags] Flags [ url | id | password | system ] url (필수) --url, -u 접속할 Cocktail DashBoard의 Url을 입력 한다. id (필수) --id, -i ID 정보를 입력 한다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.4/",
        "teaser":null},{
        "title": "`logout` command",
        "excerpt":" logout는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online 서비스에서 로그아웃 한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      cube logout   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.5/",
        "teaser":null},{
        "title": "`cluster register` command",
        "excerpt":" cluster register는 설치된 Cocktail Cluster를 Cocktail DashBoard 또는 Cocktail Online에 등록 할 때 사용한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster register  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.6/",
        "teaser":null},{
        "title": "`cluster list` command",
        "excerpt":" cluster list는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 정보를 표시한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster list  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.7/",
        "teaser":null},{
        "title": "`cluster resize` command",
        "excerpt":" cluster resize는 노드의 개수를 늘리거나 줄일 때 사용한다.    Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command   Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다.  register command    Usage   vi cube.toml  [[node-pool.nodes]] ip 항목을 수정 합니다.      Cocktail Cluster resize  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.8/",
        "teaser":null},{
        "title": "`cluster upgrade` command",
        "excerpt":"cluster upgrade는 설치된 Cocktail Cluster를 upgrade한다. 현재 지원가능한 버전은 1.13.1 버전에서 1.13.2, 1.13.3, 1.13.5 버전으로의 **upgrade를 지원한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Usage vi cube.toml [cube]...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.3.9/",
        "teaser":null},{
        "title": "8.4 運用ガイド",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4/",
        "teaser":null},{
        "title": "Cube cluster startup & shutdown",
        "excerpt":"Cube cluster의 startup과 shutdown은 일련의 순서대로 진행해야 한다. Startup Startup시에는 master node를 먼저 기동하고 worker node를 기동하는 순서로 진행한다. 1) Master Node # systemctl start etcd # systemctl start docker # systemctl start kubelet 2) Worker Node # systemctl start docker # systemctl start kubelet Shutdown Shutdown시에는 startup시와는 반대로 worker...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.1/",
        "teaser":null},{
        "title": "8.4.10 Alarm Message 슬랙 / Email 연결",
        "excerpt":"Alarm Message 앱을 생성한 채널에 연결 채널을 생성 합니다. (name : cube-alarm) 아래 URL로 제공 되는 앱의 Incoming Webhook(Send data into Slack in real-time)을 생성 합니다. https://slack.com/apps/A0F7XDUAZ-incoming-webhooks (로그인 필요) Add Configuration 버튼을 클릭 합니다. 메세지를 출력할 채널을 선택 또는 생성 합니다. Add Incomming WebHooks integration 버튼을 클릭하면 다음화면에서 Webhook URL을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.10/",
        "teaser":null},{
        "title": "Update cube cluster certificate",
        "excerpt":"Kubernetes를 구성하는 각 컴포넌트들도 내부 인증서를 통해 통신한다. 필요에 의해 이 인증서를 update해야 하는 경우 아래의 절차대로 수행한다. 1.먼저 각 master node와 worker node의 기존 인증서를 삭제한다. # ssh to master node # rm -rf /opt/kubernetes/pki # rm -rf /etc/kubernetes/pki 2.인증서를 재 생성한다. 이전에 설치를 진행한 디렉토리에서 cert.yaml을 실행하여 인증서를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.2/",
        "teaser":null},{
        "title": "Add etcd member to existing etcd cluster",
        "excerpt":"Etcd cluster가 가동중인 상태에서 etcd member를 추가하는 방법에 대해 기술한다. etcd 인증서 디렉토리: /etc/kubernets/pki/etcd etcd 설정파일: /etc/etcd/etcd.conf 1.etcd ca 파일을 기반으로 추가하고자 하는 etcd node에서 etcd 인증서를 생성한다. # cube.toml에 추가할 etcd node 정보를 기입한다. etcd cluster는 반드시 홀수개의 node로 구성되어야 하며, 최대 5개로 구성하는 것을 권고한다. $ vi cube.toml...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.3/",
        "teaser":null},{
        "title": "Cube cluster backup & restore",
        "excerpt":"Cube cluster가 어떤 이유로 인해 재설치할 경우를 대비하여 kubernetes workload의 데이터베이스 역할을 수행하는 etcd 데이터의 백업은 반드시 주기적으로 수행되어야 한다. 또한, 칵테일이 설치되어 있는 경우에는 칵테일 데이터베이스도 주기적으로 백업하여 cluster장애로 인한 재설치시에 사용하도록 한다. etcd 인증서는 반드시 기존 설치시에 사용된 인증서를 사용해야 하며, 그렇지 않을 경우 복원할 수 없다. etcd...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.4/",
        "teaser":null},{
        "title": "Docker container disk 관리",
        "excerpt":"Container 내에서 stdout, stderr로 출력을 보내면 docker overlay storage driver를 사용하는 경우 $DOCKERROOT/containers/{containerid}/containerid-json.log 파일에 저장되며 별다른 조치를 하지 않을 경우 계속 증가하게 된다. 이를 방지하기 위해 아래와 해당 디렉토리에 logrotation 설정파일을 추가한다. 아래 /data/docker 디렉토리가 $DOCKER_ROOT임. 1./etc/logrotate.d/docker-container # Added by cube /data/docker/containers/*/*.log { daily rotate 4 compress size=10M missingok delaycompress...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.5/",
        "teaser":null},{
        "title": "칵테일 암호 관리",
        "excerpt":"1.칵테일 로그인 암호 관리. 1) 칵테일 암호 관리 대상은 칵테일이 설치된 모든 cluster를 대상으로 한다. 2) 암호는 “영문대소문자 + 특수기호(!@#$%^&amp;*=+-_) + 숫자” 조합으로 최소 8자 이상 최대 24자리까지 생성 가능하다. 3) 암호 변경 주기는 90일이며, 90일이 지나서 칵테일에 로그인할 경우 암호 변경 화면이 표시된다. 암호 변경화면에서 “다음에 변경하기”를 선택하면 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.6/",
        "teaser":null},{
        "title": "캐시 메모리 증가에 따른 클러스터 노드 메모리 최적화 방법",
        "excerpt":" 클러스터를 구성하는 각 node는 cache memory가 점차적으로 증가하게 되어 있다.   주기적으로 각 node에서 아래 명령을 수행함으로써 cache memory를 초기화 할 수 있다.   # sync; echo 3 &gt; /proc/sys/vm/drop_caches 또는 # sync; sysctl -w vm.drop_caches=3   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.7/",
        "teaser":null},{
        "title": "칵테일 클라우드에서 스토리지 볼륨 스케일업 방법",
        "excerpt":"워크로드가 스토리지 볼륨(Persistent Volume)을 사용 중, 용량이 부족 할 경우 스토리지의 용량을 확장 할 경우가 있다. 이 경우 칵테일에서는 아래와 같이 조치하면 된다. 쿠버네티스에서는 몇몇 클라우드 프로바이더의 스토리지 클래스를 통해 PVC의 요청량을 늘리면 PV 및 해 당 스토리지의 용량이 자동 확장 된다. 이 때 PV는 Capacity 량이 조정 되며, 연결된...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.8/",
        "teaser":null},{
        "title": "AWS Billing Report 생성",
        "excerpt":"AWS 청구 및 비용 관리는 AWS 사용에 대한 청구 보고서 세트를 제공한다. 이 보고서에는 사용한 AWS 서비스, 사용 시간, 전송 한 데이터의 양, 사용한 평균 저장 공간 등이 표시됩니다. 사전준비 AWS Management Console에 루트 사용자로 로그인 해야 한다. AWS Cost and Usage report 생성 1. 루트 사용자로 Sign in to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.4.9/",
        "teaser":null},{
        "title": "Troubleshooting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5/",
        "teaser":null},{
        "title": "k8s cluster の health check",
        "excerpt":"Cube로 설치한 장비에서 Kubernetes와 칵테일의 주요 구성 요소에 대해 상태 체크를 하기 위한 방법은 아래와 같다. 이는 cube로 설치후 k8s 주요 구성 요소의 정상 동작 여부를 확인하는데 사용할 수 있다. cube status 명령을 통한 etcd, k8s pod, monitoring pod, 칵테일 pod 상태를 체크할 수 있다. etcd daemon은 kubernetes에서 생성되는 각종...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5.1/",
        "teaser":null},{
        "title": "ユーザーの micro serviceが相互接続できない時",
        "excerpt":"일반적으로 k8s에서 각 Container들은 연관된 Container와 통신하기 이해 Kubernetes DNS를 사용한다. 즉 POD는 생성과 삭제가 일어나면 POD가 가지고 있던 내부 cluster ip는 변동되게 됨으로 일반적으로 micro service들을 k8s dns를 통해 필요한 container를 찾는다. 먼저 k8s의 DNS 서비스가 정상 동작 중인지 확인하는 방법은 busybox를 생성하고 컨테이너에 접속해서 nslookup명령으로 k8s의 DNS에 접속되는지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5.2/",
        "teaser":null},{
        "title": "NFSサーバーの接続確認方法",
        "excerpt":"칵테일 서비스는 기본적으로 Storage class를 이용하여 persistence volume을 사용한다. local 및 baremetal 환경에서는 NFS 서버를 구축하여 Storage class로 활용하며 public cloud에서는 해당 서비스 제공자가 기본적으로 제공해 주는 storage class를 사용하게 된다. 본 문서는 local 및 Baremetal 환경에서 NFS 서버의 상태 및 칵테일 service와의 연결이 정상적인지 확인하는 방법을 기술한다. NFS 서버의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5.3/",
        "teaser":null},{
        "title": "Cubeで設置したノードのIP変更",
        "excerpt":" cube로 설치한 master node, worker node에서 ip 정보가 변경되면 현재로서는 cube를 이용하여 재설치하는 방식을 권장한다.   이는 k8s의 component중 api server, scheduler, control manager가 ip 인증서 기반으로 통신하며, etcd의 flannel subnetwork정보도 ip정보가 저장되기 때문이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5.4/",
        "teaser":null},{
        "title": "Cent yum 自動 upgrade 停止",
        "excerpt":"칵테일은 kubernetes package의 버전에 따라 설정파일의 차이가 있으므로, 시스템에서 yum upgrade가 자동으로 설정되어 있으면 시스템 업그레이드시에 칵테일 관련 설정이 override 될 수 있으므로 반드시 security 부분만 자동으로 업그레이드가 되도록 수정해야 한다. 만약 그렇지 않으면, 시스템의 재기동이 필요한 업그레이드나 칵테일 관련 설정파일이 override 되면서 서비스가 중단될 수 있다. yum-cron 설정 파일...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/8.5.5/",
        "teaser":null},{
        "title": "9.メンバー",
        "excerpt":" ワークスペースに属しているメンバー情報を表示する。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ja/9/",
        "teaser":null},{
        "title": "Cocktail Cloud란?",
        "excerpt":"Cocktail Cloud는 올인원 컨테이너 관리 플랫폼(All-in-one Container Management Platform)이다. 클라우드 사용이 보편화 되면서, 인프라 뿐 아니라 어플리케이션, 서비스 관리에 대한 요구가 높아지고 있다. 과거와 같은 개발, 운영 방식으로는 클라우드의 장점을 활용하기에 한계가 있기 때문이다. 특히 어플리케이션 영역에서는 지속적인 통합 및 배포(Continuous Integration/Deploy, CI/CD), 마이그레이션(Migration), 멀티/하이브리드 클라우드 구축 등 자동화, 효율화,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.0/",
        "teaser":null},{
        "title": "Cocktail Cloud 구성 개요",
        "excerpt":"Cocktail Cloud는 그 역할에 따라 5개의 레이어로 구성된다. Cluster Management Layer: 컨테이너가 배포/실행되는 인프라(클러스터)와 오케스트레이션(Orchestration)을 담당하는 레이어다. 오케스트레이션은 Kubernetes(https://kubernetes.io)가 담당하고 인프라 관리, 모니터링 등 확장 관리 기능을 제공한다. Service Management Layer: 서비스(Workload)를 기준으로 컨테이너 구성과 관리를 담당하는 레이어다. 서비스를 구성하는 다수의 컨테이너와 관련 객체를 패키징하고 그 수명주기와 모니터링을 관리한다. Pipeline:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer (클러스터 관리 레이어)",
        "excerpt":"클러스터 관리 레이어는 클러스터를 구성하는 인프라 스트럭처와 컨테이너 오케스트레이션 엔진 부분으로 구분된다. 상세 구성은 아래 그림과 같다. Cocktail Cloud는 클러스터 인프라와 오케스트레이션 엔진을 사용자의 설정에 따라 자동 프로비져닝(Provisioning)하는데 이를 담당하는 도구가CUBE이다. CUBE는 고가용(High Availability, HA)의 Kubernetes클러스터를 구성한다. CUBE가 프로비져닝하는 클러스터 구성은 높은 안정성과 보안, 확장성을 제공한다.(이를 CUBE클러스터라 한다.) CUBE클러스터는 현재...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.2/",
        "teaser":null},{
        "title": "Service Management Layer (서비스 관리 레이어)",
        "excerpt":"일반적으로 하나의 어플리케이션 및 서비스는 다수의 컨테이너로 구성된다. 특히 Kubernetes와 같은 오케스트레이션 엔진의 경우 컨테이너 외에도 서비스 포트, 컨트롤러, 볼륨등의 추가적인 객체를 필요로 한다. 따라서 컨테이너 기반의 어플리케이션 및 서비스를 관리하기 위해서는 컨테이너와 관련 객체를 패키징하고 관리하는 추상화 단위가 필요하다. 서비스 관리 레이어는 이를 담당하는 레이어다. Cocktail Cloud의 서비스 관리는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.3/",
        "teaser":null},{
        "title": "Pipeline Layer (파이프라인 레이어)",
        "excerpt":"파이프라인 레이어는 코드로부터 컨테이너 빌드와 배포를 자동화 한다. Build는 코드 다운로드, 코드 빌드 및 테스트등 작업(Task), 컨테이너 이미지 빌드를 사용자 설정을 기준으로 순차적으로 수행한다. 작업(Task)은 내부에서 작업을 수행하는 컨테이너를 사용하는데, 기본 제공되는 컨테이너 외에도 공개 또는 사용자가 만든 컨테이너를 사용하여 확장 할 수 있다. 빌드 된 이미지는 Cocktail Cloud 서버의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.4/",
        "teaser":null},{
        "title": "Catalog Layer (카탈로그 레이어)",
        "excerpt":"컨테이너는 그 구성을 이미지화하여 배포 실행한다. 따라서 자주 사용하는 DB나 미들웨어 등의 런타임은 컨테이너 이미지와 배포 정보를 템플릿화 하면 반복적인 작업을 줄이고 언제든 필요할 때 쉽게 배포하여 사용 할 수 있다. 이러한 템플릿을 생성하고 관리를 담당하는 레이어가 카탈로그다. 카탈로그 레이어의 구성을 도식화하면 아래와 같다. 카탈로그는 목적에 따라 두 가지 형태로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.5/",
        "teaser":null},{
        "title": "Dashboard Layer (대시보드 레이어)",
        "excerpt":"Cocktail Cloud의 대시보드 레이어는 서비스 현황, 모니터링, 클러스터 현황 등을 웹UI형태로 제공한다. 대시보드는 사용자의 역할에 맞는 뷰를 권한에 따라 제공한다. Cocktail Cloud의 사용자 권한은 다음과 같다. Administrator(Admin) : 클러스터 관리를 수행하고, Cocktail Cloud의 모든 서비스에 대해 관리 권한을 가진다. DevOps : 할당된 하나 이상의 워크스페이스에 대해서만 관리 권한을 가진다. 워크스페이스...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.6/",
        "teaser":null},{
        "title": "1. 로그인",
        "excerpt":" 아래는 Cocktail Cloud의 초기 로그인 화면이다.   시스템명, ID, Password 입력 후 로그인 할 수 있다.   (아이디는 관리자에게 별도 문의)      최초 접속 또는 비밀번호 초기화시에는 반드시 비밀번호를 변경 해야한다.      기간이 90일이 경과한 경우에도 비밀번호를 변경하거나 비밀번호를 연장 할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/1/",
        "teaser":null},{
        "title": "10.용어 설명",
        "excerpt":" Cocktail Cloud 활용의 이해를 돕기 위한 Kubernetes 및 청지원 용어 정리이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/10/",
        "teaser":null},{
        "title": "Kubernetes(k8s)",
        "excerpt":"1.Cluster 용어 설명 Namespace k8s의 가상 클러스터로 사용자들이 여러팀 또는 프로젝트로 분산되어 작업 할 수 있는 별도의 환경 Nodes k8s의 클러스터링되어 있는 어플리케이션을 구동하는 물리서버 또는 VM Persistent Volumes(PV) 외부 저장소. NFS, iSCSI, 클라우드에서 제공하는 스토리지 시스템을 지원 Roles 사용의 따라 권한을 부여. Storage Classes PV를 동적으로 Provisioning 할 경우,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/10.1/",
        "teaser":null},{
        "title": "Cocktail Cloud",
        "excerpt":"1.환경설정 Cocktail Cloud을 이용하기 위해서 사전에 정보를 등록하는 서비스 용어 설명 사용자 Cocktail Cloud을 이용하기 위한 사용자 관리를 지원 계정 k8s Cluster에 대한 사용자 인증 정보에 대한 관리를 지원 서비스 업무 또는 프로젝트 단위로 작업을 분산하여 관리. 관리자는 일반사용자에 대하여 서비스 단위로 접근권한을 부여할 수 있다. C.클러스터 : k8s를 사용하기...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/10.2/",
        "teaser":null},{
        "title": "Cocktail Cloud System Error Code",
        "excerpt":"1. 에러 코드 코드 메시지 CCCM001 구체적 오류 번호를 밝힐 수 없음. CCCM002 알수 없는 오류 입니다 CCCM004 잘못된 함수 호출 인자입니다 CCCM005 인증되지 않은 요청입니다 CCCM006 전달된 정보가 올바르지 않습니다 CCCM007 서버, 작업 등이 올바르지 않거나 요청을 처리할 수 없습니다 CCCM019 내부 서버 오류 CCCM020 외부 호출 API가 오류를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/10.3/",
        "teaser":null},{
        "title": "11.고객지원 서비스",
        "excerpt":"Cocktail Cloud을 이용해 주셔서 감사합니다. 제품 구매 기능상담 등의 기술 지원 서비스 및 각종 혜택을 받을 수 있습니다. 제공하는 각종 서비스는 다음과 같습니다. 방문 서비스를 통하여 Q&amp;A, 제품에 관한 정보 및 기타 문의를 할 수 있습니다. 고객 등록을 마친 제품과 상담이 가능한 제품에 한하여 전화나 팩스를 통하여 전문 기술상담 서비스를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/11/",
        "teaser":null},{
        "title": "매뉴얼 번역 방법",
        "excerpt":"매뉴얼 번역 안내 Github Clone with HTTPS 주소 Github User로 로그인 합니다(수정권한 필요). https://github.com/acornapps/cocktail-manual-3.1.1.git 매뉴얼 목차 수정 _data/navigation.yml의 zh: 항목을 번역 합니다. navigation.yml의 url 정보와 해당 문서(cocktail-manual-3.1.1/_docs/zh)의 Front Matter : permalink 정보는 일치 해야 합니다. 각 문서는 cocktail-manual-3.1.1/_docs/언어(ZH) 디렉토리로 구분되어 있습니다. Front Matter의 sidebar: 값은 nav: “zh” 입니다. 다음은 샘플...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/11.1/",
        "teaser":null},{
        "title": "2.시스템 관리",
        "excerpt":" 칵테일 클라우드 이용에 필요한 시스템, 클러스터, 워크스페이스를 관리 할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2/",
        "teaser":null},{
        "title": "2.1 시스템",
        "excerpt":"시스템 이용에 필요한 시스템 정보, 계정 정보, 클라우드 미터링 계정, 시스템 사용자를 관리 할 수 있다. a) 좌측 메인메뉴 → 시스템 시스템 정보 설명 시스템 명 칵테일 클라우드의 시스템 이름 시스템 접속 계정 칵테일 클라우드 접속을 위한 시스템 계정 사용자 인증 유형 PLAIN ID/PW, Azure Active Directory 중 선택 AppID...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1/",
        "teaser":null},{
        "title": "2.1.1 시스템 편집",
        "excerpt":"시스템 이용에 필요한 시스템 정보, 계정 정보를 수정 할 수 있다. a) 좌측 메인메뉴 → 시스템 → 우측 상단 편집 버튼 시스템 정보(기본 언어, 사용자 인증 유형, 시스템 로고, 시스템 설명)와 계정 정보(조직명, 계정 담당자 명, 계정 담당자 이메일, 주소)를 수정 할 수 있다. b) 좌측 메인메뉴 → 시스템 →...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 클라우드 미터링 계정 등록",
        "excerpt":"  클라우드 미터링 계정 등록 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 등록                Amazon Web Service             Google Cloud Plalform       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 클라우드 미터링 계정 편집",
        "excerpt":"  클라우드 미터링 계정 편집 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 액션 메뉴 → 계정 편집 → 수정완료 후 수정버튼을 클릭한다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 클라우드 미터링 계정 삭제",
        "excerpt":"  클라우드 미터링 계정을 삭제 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 액션 메뉴 → 계정 삭제    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.4/",
        "teaser":null},{
        "title": "2.1.5 시스템 사용자 추가",
        "excerpt":"  시스템 사용자를 추가 하는 기능이다.   관리자도 여러명 추가 및 삭제가 가능하지만 한명일 경우는 삭제가 되지 않는다.   a) 좌측 메인메뉴 → 시스템 → 사용자 추가를 클릭한다                        시스템 사용자       설명                       이름       시스템 사용자 이름                 아이디       칵테일 클라우드 접속 사용자 아이디                 권한       관리자(관리자메뉴 사용가능), 사용자                 설명       시스템 사용자 설명          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.5/",
        "teaser":null},{
        "title": "2.1.6 시스템 사용자 편집",
        "excerpt":" 시스템 사용자 정보(이름, 설명)를 편집 하는 기능이다.   a) 좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 편집를 클릭한다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.6/",
        "teaser":null},{
        "title": "2.1.7 시스템 사용자 비밀번호 초기화",
        "excerpt":"  Cocktail Cloud 사용자 비밀번호를 초기화 하는 기능이다.(초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.)   a)  좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 비밀번호 초기화를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.7/",
        "teaser":null},{
        "title": "2.1.8 시스템 사용자 삭제",
        "excerpt":" 시스템 사용자를 삭제하는 기능이다.   a)  좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.8/",
        "teaser":null},{
        "title": "2.2 클러스터",
        "excerpt":"클러스터의 등록관리와 노드와 어플리케이션 단위의 모니터링, 볼륨, 알람, 미터링 서비스가 제공된다. 클러스터 메뉴 설명 노드 전체 노드의 CPU, Memory, Network 사용량 및 개별 노드의 모니터링 서비스 어플리케이션 전체 어플리케이션의 CPU, Memory, Network 사용량 및 개별 어플리케이션의 모니터링 서비스 볼륨 스토리지 관리 및 볼륨 현황 알람 클러스터의 이벤트 정보 관련 알람...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2/",
        "teaser":null},{
        "title": "2.2.1 클러스터 등록",
        "excerpt":"클러스터를 추가 등록할 수 있는 기능이다. a) 클러스터 → 오른쪽 상단 + 클러스터 등록 버튼을 클릭한다. b) 프로바이더 정보(프로바이더, 유형, 리전)를 입력한다. 계정의 프로바이더와 유형에 따라 입력란이 변경된다. Google GKE, Azure AKS 선택시 사용자 계정 인증 정보 대신 Google과 Azure ID로 인증이 필요하다. 프로바이더 설명 프로바이더 프로바이더를 선택 유형 Kubernetes의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.1/",
        "teaser":null},{
        "title": "2.2.10 애드온 관리",
        "excerpt":"칵테일에 설치 된 애드온을 배포 및 재배포 관리를 하고, 애드온 현황에 대한 모니터링 서비스를 제공한다. a) 클러스터 → 클러스터 선택 → 애드온 → 애드온이름을 클릭한다. 애드온에 설치된 인스턴스의 정보를 조회 할 수 있다. 인스턴스 정보 인스턴스 상세 정보, 상태 정보, 이벤트 정보, 배포 정보, 웹터미널, 로그 서비스 상세 정보, 이벤트...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.10/",
        "teaser":null},{
        "title": "2.2.2 클러스터 수정",
        "excerpt":"  클러스터의 기본정보, 프로바이더, 모니터링, 클러스터 유형을 수정하는 기능이다. 프로바이더의 계정, 유형, 리전, 프로젝트 아이디, 서브스크립션 아이디, 클러스터 정보는 변경할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 수정버튼 → 수정 완료 후 저장버튼을 클릭한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 클러스터 삭제",
        "excerpt":" 클러스터 정보를 삭제하는 기능이다. 해당 클러스터를 사용하고 있는 어플리케이션 맵이 있을 경우 삭제할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 삭제버튼을 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.3/",
        "teaser":null},{
        "title": "2.2.4 볼륨",
        "excerpt":"Public Cloud 스토리지 및 외부 스토리지 정보를 등록하고, 볼륨 현황에 대한 모니터링 서비스를 제공한다. a) 클러스터 → 클러스터 선택 → 볼륨을 클릭한다. 스토리지 설정 정보 설명 + 버튼 스토리지 추가 페이지로 이동 이름 스토리지 이름(사용자지정) 타입 스토리지 종류(NFS/EBS/Google Persistent Disk/Azure Disk) 스토리지 클래스 이름 k8s에 등록된 Class Name 정책 스토리지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.4/",
        "teaser":null},{
        "title": "2.2.5 스토리지 추가",
        "excerpt":"볼륨을 추가하여 사용 할 수 있다. a) 클러스터 → 클러스터 선택 → 볼륨을 클릭 → 오른쪽 상단 + 모양의 버튼을 클릭한다. b) 클러스터, 이름, 설명, 스토리지 플러그인, 정책, 스토리지 클래스 이름, 스토리지 프로비저너 또는 플러그인 설정을 차례로 기입한다. 스토리지 등록 정보 설명 이름 PV 이름 설명 PV 사용자 설명 스토리지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.5/",
        "teaser":null},{
        "title": "2.2.6 스토리지 편집",
        "excerpt":" 등록된 스토리지 정보를 편집하는 기능이다. 단, NFS Named 타입의 스토리지는 편집할 수 없다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션 버튼 → 스토리지 편집을 클릭한다.     b) 플러그인 유형에 따라 이름, 설명 등을 수정 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.6/",
        "teaser":null},{
        "title": "2.2.7 스토리지 삭제",
        "excerpt":" 등록된 스토리지 정보를 삭제하는 기능이다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션버튼 → 볼륨 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.7/",
        "teaser":null},{
        "title": "2.2.8 기본 스토리지 지정",
        "excerpt":" 기본 스토리지 지정 기능이다. 카탈로그 배포시 워크로드 타입이 StatefulSet 타입인 경우 수정없이 바로 배포할 경우 스토리지 볼륨이 생성되는 기본 위치이다.  스토리지 플러그인 타입이 NFS Named 인 경우 기본 스토리지 설정은 불가능하다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션버튼 → 기본 스토리지 지정을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.8/",
        "teaser":null},{
        "title": "2.2.9 애드온",
        "excerpt":" 칵테일에 설치 된 애드온에 대한 모니터링 서비스를 제공한다.   a) 클러스터 → 클러스터 선택 → 애드온을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.9/",
        "teaser":null},{
        "title": "2.3 워크스페이스",
        "excerpt":" 빌드 및 배포, 운영할 수 있는 워크스페이스를 할당한다. 워크스페이스 별로 사용자, 클러스터, 라이브러리 등록이 가능하다.   a) 좌측 메인메뉴 → 워크스페이스                     서비스 설정       설명                       워크스페이스 명       워크스페이스 이름 (사용자지정)                 클러스터 수       워크스페이스에 할당된 클러스터 수                 구성원 수       워크스페이스를 사용하는 구성원 수                 시스템 명       시스템 명                 설명       워크스페이스 설명          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3/",
        "teaser":null},{
        "title": "2.3.1 워크스페이스 생성",
        "excerpt":"워크스페이스를 생성 하는 기능이다. 워크스페이스 별로 구성원 등록 및 클러스터, 레지스트리(저장소) 등록을 할 수 있다. a) 좌측 메인메뉴 → 워크스페이스 → 오른쪽 상단 워크스페이스 생성 버튼을 클릭한다. b) 서비스에 사용할 이름, 설명, 색상, 레지스트리 및 구성원, 클러스터 정보를 등록한다. c) 구성원, 클러스터 추가는 체크박스가 선택 된것만 반영이 된다. 클러스터 편집...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 워크스페이스 편집",
        "excerpt":" 워크스페이스 정보를 편집하는 기능이다. 워크스페이스 이름, 설명, 색상 변경이 가능하며 해당 서비스를 사용할 구성원 편집, 워크스페이스에 등록할 클러스터 편집이 가능하다.   a) 좌측 메인메뉴 → 워크스페이스 → 워크스페이스 액션 메뉴 → 워크스페이스 편집 → 수정완료 후 수정버튼을 클릭한다.     b) 워크스페이스 명, 설명, 색상 및 구성원, 클러스터 수정이 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 워크스페이스 삭제",
        "excerpt":" 워크스페이스를 삭제 하는 기능이다. 삭제 시, 워크스페이스에 클러스터가 등록되어 있을 경우 삭제가 불가능하며 워크스페이스 편집에서 클러스터를 제거 후 삭제를 진행할 수 있다.   a) 좌측 메인메뉴 → 워크스페이스 → 워크스페이스 액션 메뉴 → 워크스페이스 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.3/",
        "teaser":null},{
        "title": "2.4 대시보드",
        "excerpt":"대시보드에서는 Cocktail Cloud에 서비스된 정보를 한 눈에 확인 할 수 있다. 요약정보 현재 등록 관리되고 있는 클러스터 개수, 워크스페이스 개수, 서비스 개수, 현재 발생한 알람의 개수를 볼 수 있다. 워크스페이스 현황 워크스페이스별로 클러스터, 서비스, 워크로드 개수를 확인할 수 있다. 클러스터 현황 등록된 클러스터 별로 서비스 개수, 워크로드 개수를 확인할 수...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.4/",
        "teaser":null},{
        "title": "3 사용자 관리",
        "excerpt":"현재 사용자 정보를 확인 및 관리 할 수 있다. a) 대시보드 -&gt; 페이지 왼쪽 하단 사용자 모양 버튼을 클릭 목록 설명 ID 현재 사용중인 계정의 ID를 확인할 수 있다. 사용자 언어 선택 Korean, Japanese, English, Chinese 중 언어를 선택할 수 있다. 사용자 타임존 선택 Seoul, Tokyo, NewYork, Shanghai 중 타임존을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3/",
        "teaser":null},{
        "title": "4.서비스",
        "excerpt":" 서비스와 워크로드를 생성, 관리 하는 기능이다.                   목록       설명                              서비스 그룹 액션메뉴                        서비스 생성 팝업 호출          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4/",
        "teaser":null},{
        "title": "4.1 서비스 관리",
        "excerpt":" 서비스와 해당 서비스 그룹 및 워크로드를 관리한다.   ㅤㅤㅤㅤㅤ                  목록       설명                              논리적 단위로 구성된 그룹. 액션메뉴를 활성화하면 해당 그룹에 그룹명 변경, 위 or 아래 이동, 위 or 아래 그룹추가, 그룹 삭제가 가능. +서비스 생성 버튼을 클릭하면 서비스를 생성할 수 있음.          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1/",
        "teaser":null},{
        "title": "4.1.1 서비스",
        "excerpt":"서비스 구성 단위이다. 논리적 단위로 그룹을 구성하고 그룹 내에 워크로드를 배치한다. 맵을 구성하고 있는 클러스터의 미터링 정보를 확인하거나, 워크로드의 모니터링 정보를 확인 할 수 있다. 배포 작업을 생성해서 워크로드를 생성하거나 업데이트 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택하여 클릭한다. 목록 설명 논리적 단위로 구성된 그룹....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.1/",
        "teaser":null},{
        "title": "4.1.1-1 서비스 그룹관리",
        "excerpt":"서비스에 대하여 그룹으로 관리한다. 해당 그룹에 서비스를 생성할 수 있다. 그룹명, 그룹색상을 변경하거나, 그룹 추가, 이동, 삭제 가능하다. a) 좌측 메인메뉴 → 서비스 → 서비스 그룹의 ▼(액션 버튼) 클릭하여 메뉴를 활성화한다. 목록 설명 그룹명 변경 그룹명, 그룹색상을 변경 위로 이동 그룹을 위로 이동 아래로 이동 그룹을 아래로 이동 위에 그룹...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.1.1/",
        "teaser":null},{
        "title": "4.1.1-2 서비스 생성",
        "excerpt":" 서비스에 새로운 서비스를 생성 한다.   a) 좌측 메인메뉴 → 서비스 → 서비스화면 상단의 [+서비스 생성] 버튼을 클릭한다.     b) 사용하고자 하는 클러스터를 선택하고, 서비스 그룹, 서비스 이름과 네임스페이스 이름을 지정하여 서비스를 생성한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.1.2/",
        "teaser":null},{
        "title": "4.1.1-3 서비스 이름변경",
        "excerpt":" 서비스의 이름을 변경한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드의 우측 ✎ 버튼을 클릭한다.     b) 활성화된 이름 입력란에 내용을 변경 후, Enter 키를 눌러 서비스의 이름을 변경한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.1.3/",
        "teaser":null},{
        "title": "4.1.1-4 서비스 맵 삭제",
        "excerpt":" 서비스를 삭제하는 기능이다. 서비스 맵을 삭제하기 위해서는 배포 중인 워크로드가 없어야 한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드선택 → 우측 상단 실행 액션 버튼을 클릭한 뒤 서비스 삭제를 클릭한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.1.4/",
        "teaser":null},{
        "title": "4.1.2 그룹 관리",
        "excerpt":"워크로드에 대하여 그룹으로 관리한다. 해당 그룹에 워크로드를 생성할 수 있다. 그룹명을 변경하거나, 그룹 추가, 이동, 삭제, 컬럼수 변경이 가능하다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 워크로드 그룹의 ▼(액션 버튼) 클릭하여 메뉴를 활성화한다. 목록 설명 그룹명 변경 그룹명을 변경 컬럼수 변경 컬럼수를 변경(최소:1~최대:8) 왼쪽으로 이동 그룹을 왼쪽으로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1.2/",
        "teaser":null},{
        "title": "4.2 워크로드",
        "excerpt":" 서비스를 구성하는 최소 단위이다. 1개의 워크로드가 서비스가 될 수도 있고, 여러개의 워크로드가 하나의 서비스를 구성 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택하면 맵안에 구성된 워크로드들을 볼 수 있다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2/",
        "teaser":null},{
        "title": "4.2.1 워크로드 생성",
        "excerpt":"그룹관리에서 워크로드를 생성하고 실행한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 워크로드 그룹 + 버튼(워크로드 생성)을 클릭한다. b) 기본정보, 초기화 컨테이너, 컨테이너, 인스턴스, 오토 스케일링, 업데이트 정책, 네트워크(애드온 Multi-nic를 지원하는 경우), 서비스 포트, 볼륨마운트, 볼륨, 볼륨템플릿 내용을 작성하고 생성버튼을 눌러 워크로드를 생성한다. 워크로드 기본 정보 정의 항목...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.1/",
        "teaser":null},{
        "title": "4.2.2 워크로드 편집",
        "excerpt":"Running 또는 Stopped 상태의 워크로드를 편집하고 재배포 한다. a) 좌측 메인메뉴 → 서비스 → 서비스카드 선택 → 워크로드를 클릭한다. b) 기본정보, 컨테이너, 인스턴스, 업데이트 정책, 서비스 포트, 볼륨 내용을 편집하고 수정버튼을 눌러 워크로드를 재배포 한다. 워크로드가 Running 중이라면 워크로드유형과 컨테이너의 이미지 변경이 불가능. 단, 컨테이너 이미지태그 변경은 가능. 이를 변경하기...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.2/",
        "teaser":null},{
        "title": "4.2.3 워크로드 인스턴스 정보 조회",
        "excerpt":"워크로드 인스턴스의 정보를 조회 할 수 있다. 인스턴스 정보 Instance 상세 정보, 상태 정보, 이벤트 정보, 배포 정보, 웹터미널(컨테이너), 로그(컨테이너) Services 상세 정보, 이벤트 정보, 배포 정보 Persistent Volume Claims 상세 정보, 볼륨 상세 정보, 배포 정보 Controller 상세 정보, 이벤트 정보, 배포 정보, 오토스케일러(Deployments만 해당) 정보(옵션) Ingresses 상세 정보,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.3/",
        "teaser":null},{
        "title": "4.2.4 워크로드 중지",
        "excerpt":" 배포된 워크로드를 중지한다. 워크로드를 중지하면 POD는 삭제된다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 중지를 클릭한다.      b) 워크로드 상세 우측 실행 액션 버튼에서도 실행 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.4/",
        "teaser":null},{
        "title": "4.2.5 워크로드 시작",
        "excerpt":" 중지된 워크로드를 시작한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 시작을 클릭한다.      b) 워크로드 상세 우측 실행 액션 버튼에서도 실행 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.5/",
        "teaser":null},{
        "title": "4.2.6 워크로드 재시작",
        "excerpt":" 워크로드를 재시작한다. 컴퓨터의 Rebooting과 같은 개념이다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 재시작을 클릭한다.      b) 워크로드 상세 우측 실행 액션 버튼에서도 실행 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.6/",
        "teaser":null},{
        "title": "4.2.7 워크로드 제거",
        "excerpt":" 중지된 워크로드를 제거한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 제거를 클릭한다.      b) 워크로드 상세 우측 실행 액션 버튼에서도 실행 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2.7/",
        "teaser":null},{
        "title": "4.3 모니터링",
        "excerpt":" 워크로드, POD, Container 별로 사용 중인 CPU, Memory, Network 사용량에 대하여 조회 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드선택 → 모니터링을 클릭한다.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.3/",
        "teaser":null},{
        "title": "4.4 파이프라인",
        "excerpt":"파이프라인 기능을 통해 이미지 빌드 작업부터 워크로드 배포작업까지 한 번에 진행 할 수 있다. 또한 배포 중인 워크로드의 이미지 버전을 변경하여 재배포 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 파이프라인을 클릭한다. 파이프라인 메뉴 설명 일괄 실행 파이프라인 작업들을 일괄적으로 실행 실행 해당 파이프라인 작업을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.4/",
        "teaser":null},{
        "title": "4.5 스토리지 볼륨",
        "excerpt":"퍼시스턴트 볼륨 현황 및 생성,삭제를 제공한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 → 스토리지 볼륨 항목 설명 볼륨 이름 생성한 퍼시스턴트 볼륨 이름, 클릭 시 스토리지 볼륨 상세 화면으로 이동 볼륨 타입 볼륨 타입(Single, Shared) 상태 볼륨의 상태(Ready, Mounted) 사용량 사용량, 요청량, 총량 Age 볼륨 생성 경과 시간...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.5/",
        "teaser":null},{
        "title": "4.5.1 스토리지 볼륨 생성",
        "excerpt":"퍼시스턴트 볼륨 생성 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 → 스토리지 볼륨 항목 설명 스토리지 볼륨 타입 볼륨 타입(Single, Shared) 스토리지 클러스터에 등록된 스토리지 목록 노출 엑세스 모드 스토리지 볼륨 타입이 Single일 경우 ReadWriteOnce, Shard일 경우 ReadWriteMany, ReadOnlyMany를 선택 이름 생성할 스토리지 볼륨의 이름 용량...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.5.1/",
        "teaser":null},{
        "title": "4.5.2 스토리지 볼륨 삭제",
        "excerpt":" 퍼시스턴트 볼륨을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 → 스토리지 볼륨 → 스토리지 볼륨 액션메뉴(활성화) → 삭제 클릭    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.5.2/",
        "teaser":null},{
        "title": "4.6 설정 정보",
        "excerpt":" 어플리케이션 단위로 변수값을 key=value의 형태로 저장하여 볼륨처럼 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보를 클릭한다.                      메뉴       설명                       컨피그 맵       컨피그 맵을 등록, 편집, 삭제 관리 메뉴                 시크릿       시크릿을 등록, 편집, 삭제 관리 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6/",
        "teaser":null},{
        "title": "4.6.1 컨피그 맵",
        "excerpt":" 서버에서 Config File을 Map 형식으로 저장하여 볼륨으로 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 컨피그 맵을 클릭한다.                     항목       설명                              컨피그 맵 추가 페이지로 이동                 이름       컨피그 맵 이름(사용자 지정)                 설명       컨피그 맵 설명(사용자 지정)                        컨피그 맵의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.1/",
        "teaser":null},{
        "title": "4.6.1.1 컨피그 맵 추가",
        "excerpt":"서비스에 컨피그 맵을 추가한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 컨피그 맵을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.1.1/",
        "teaser":null},{
        "title": "4.6.1.2 컨피그 맵 수정",
        "excerpt":" 서비스에 추가 된 컨피그 맵의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 수정을 클릭      b) 데이터 값 변경 후, 수정 버튼을 클릭하여 컨피그 맵을 편집한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.1.2/",
        "teaser":null},{
        "title": "4.6.1.3 컨피그 맵 삭제",
        "excerpt":" 서비스에 컨피그 맵을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 삭제 클릭     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.1.3/",
        "teaser":null},{
        "title": "4.6.2 시크릿",
        "excerpt":" 서버에서 Secret File로 저장하여 환경변수 및 볼륨으로 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 시크릿을 클릭한다.                     항목       설명                              시크릿 추가 페이지로 이동                 이름       시크릿 이름(사용자 지정)                 설명       시크릿 설명(사용자 지정)                        시크릿의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.2/",
        "teaser":null},{
        "title": "4.6.2.1 시크릿 추가",
        "excerpt":"서비스에 시크릿을 추가한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 시크릿 → 시크릿 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 시크릿을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명 시크릿의 설정의 설명 입력...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.2.1/",
        "teaser":null},{
        "title": "4.6.2.2 시크릿 수정",
        "excerpt":" 서비스에 추가 된 시크릿의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 수정을 클릭      b) 데이터 값 변경 후, 수정 버튼을 클릭하여 시크릿을 편집한다.(시크릿 값은 보안상 보여주지 않음)     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.2.2/",
        "teaser":null},{
        "title": "4.6.2.3 시크릿 삭제",
        "excerpt":" 서비스에 시크릿을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 삭제를 클릭     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.2.3/",
        "teaser":null},{
        "title": "4.6.3 네트워크",
        "excerpt":"서버에서 Json 형태로 저장하여 워크로드의 네트워크 설정으로 사용 할 수 있다. 네트워크 메뉴는 애드온 목록에 multi-nic가 설치되 있어야 설정 가능하다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 네트워크 클릭한다. 항목 설명 네트워크 생성 페이지로 이동 이름 네트워크 이름(사용자 지정) 유형 네트워크 유형(사용자 지정) 네트워크의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.3/",
        "teaser":null},{
        "title": "4.6.3.1 네트워크 추가",
        "excerpt":"서비스에 네트워크를 추가한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 네트워크 → 네트워크 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 유형, 네트워크 설정을 입력하고 우측 상단 생성 버튼을 눌러 네트워크을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 유형 유형(현재는 SRIOV 타입만...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.3.1/",
        "teaser":null},{
        "title": "4.6.3.2 네트워크 수정",
        "excerpt":" 서비스에 추가 된 네트워크의 데이터를 수정 할 수 있다.(이름, 유형변경불가)   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 네트워크 → 네트워크 액션메뉴(활성화) →  네트워크 수정을 클릭      b) 데이터 값 변경 후, 수정 버튼을 클릭하여 네트워크를 편집한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.3.2/",
        "teaser":null},{
        "title": "4.6.3.3 네트워크 삭제",
        "excerpt":" 서비스에 네트워크 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 설정 정보 → 네트워크 → 네트워크 액션메뉴(활성화) →  네트워크 삭제를 클릭     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.6.3.3/",
        "teaser":null},{
        "title": "4.7 서비스 노출",
        "excerpt":" 생성된 워크로드에 Cluster Ip, Node Port, Loadbalancer 포트를 연결 하고, 인그레스 설정을 추가 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 서비스 노출을 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.7/",
        "teaser":null},{
        "title": "4.7.1 서비스 노출 설정",
        "excerpt":"생성된 워크로드에 Cluster Ip, Node Port, Loadbalancer 포트를 연결한다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 서비스 노출을 클릭한다. b) 화면 서비스 노출 라인의 추가 버튼을 클릭한다. c) 서비스 유형과 포트를 연결할 워크로드를 지정한다. 서비스 포트 서비스 유형은 Cluster Ip, Node Port, Loadbalancer를 지정 할 수 있으며...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.7.1/",
        "teaser":null},{
        "title": "4.7.2 인그레스 설정",
        "excerpt":"생성된 서비스에 인그레스 설정을 추가 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 카드 선택 → 서비스를 클릭한다. b) 화면 인그레스 라인의 추가 버튼을 클릭한다. 인그레스 인그레스 호스트 추가는 대상 호스트에서 기본호스트 또는 직접입력을 선택하여 추가 할 수 있다. 인그레스 TLS 추가는 시크릿 선택(설정 정보 시크릿을 tls 유형으로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.7.2/",
        "teaser":null},{
        "title": "5 빌드 관리",
        "excerpt":"도커(Docker) 이미지에 대한 빌드 작업을 관리한다. 어플리케이션을 다운로드, 소스 파일을 빌드, 이미지 파일을 생성하여 Harbor 레지스트리에 업로드한다. a) 좌측 메인 메뉴 → 빌드 를 클릭하여 해당 페이지로 이동한다. 목록 설명 빌드 생성 빌드 생성 버튼 Filter 검색을 통해 필요한 빌드 조회 빌드명 빌드의 이름 이미지명 저장된 도커 이미지 이름 작업...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5/",
        "teaser":null},{
        "title": "5.1 빌드 추가",
        "excerpt":"도커 이미지에 대한 빌드 작업을 추가한다. a) 좌측 메인 메뉴 → 빌드 화면에서 [빌드 생성] 버튼을 클릭하여 해당 페이지로 이동한다. b) 기본 정보를 입력한다. c) 빌드 작업을 추가하고 [생성] 버튼을 눌러 빌드를 생성하던지 [생성/실행] 버튼을 눌러 빌드 생성과 동시에 빌드를 실행한다. 빌드 기본 정보 기본 정보 설명 이름 생성할 빌드의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.1/",
        "teaser":null},{
        "title": "5.2 작업 설정 편집",
        "excerpt":" 빌드 작업을 편집한다.   a) 좌측 메인 메뉴 → 빌드 → 빌드 액션 메뉴(활성화) → [작업 설정 편집]을 선택하여 해당 페이지로 이동한다.   b) [편집] 버튼을 눌러서 기본 정보, 빌드 작업 내용을 수정하고 [수정] 버튼을 눌러 편집을 완료한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.2/",
        "teaser":null},{
        "title": "5.3 히스토리",
        "excerpt":"해당 빌드의 히스토리 페이지로 이동하여 빌드 실행 항목에 대하여 히스토리 정보를 볼 수 있다. a) 좌측 메인 메뉴 → 빌드 화면에서 빌드 액션 메뉴(활성화) → [히스토리]를 클릭하여 해당 페이지로 이동한다. b) 액션 메뉴(활성화) → [로그보기]를 클릭하여 빌드 로그를 확인할 수 있다. c) 액션 메뉴(활성화) → [삭제]를 클릭하여 히스토리를 삭제할 수...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.3/",
        "teaser":null},{
        "title": "5.4 빌드 실행",
        "excerpt":"빌드 작업을 실행한다. 빌드 실행을 하면, 어플리케이션 다운로드, 어플리케이션 빌드, 이미지 빌드를 한 번에 실행한다. a) 빌드 목록에서 실행할 빌드 작업의 빌드 액션 메뉴(활성화) → [빌드 실행]을 선택하면 빌드실행 창이 활성화된다. b|) 설명을 입력 후, [승인] 버튼을 클릭하면 빌드 작업을 실행한다. c) 빌드 실행 시, 현재 액션이 변경되면서 빌드 로그...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.4/",
        "teaser":null},{
        "title": "5.5 빌드 취소",
        "excerpt":" 빌드 작업을 취소한다. 빌드작업이 실행 상태(RUNNING)인 것만 취소할 수 있다.   a) 빌드 목록에서 취소할 빌드 작업의 빌드 액션 메뉴(활성화) → [빌드 취소]를 선택하여 빌드 작업을 취소한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.5/",
        "teaser":null},{
        "title": "5.6 로그 보기",
        "excerpt":" 빌드작업의 최근 실행 로그를 보여준다. 빌드실행 도중이라면 실행 중인 로그를 볼 수 있다.   a) 빌드 목록에서 로그 보기할 빌드 작업의 빌드 액션 메뉴(활성화) → [로그 보기]를 선택하여 해당 빌드 작업의 빌드 실행 로그를 볼 수 있다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.6/",
        "teaser":null},{
        "title": "5.7 작업 삭제",
        "excerpt":" 빌드 작업을 삭제한다.   a) 빌드 목록에서 삭제할 빌드 작업의 빌드 액션 메뉴(활성화) → [작업 삭제]를 선택하여 해당 빌드 작업을 삭제할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.7/",
        "teaser":null},{
        "title": "6.카탈로그",
        "excerpt":"서비스 구성을 템플릿화하여 쉽게 워크로드 생성 및 배포, 관리가 가능한 기능이다. 여러 워크로드들을 한 번에 묶어 사용하고자 하는 경우 카탈로그 기능을 사용한다. 카탈로그는 마이 카탈로그와 칵테일 카탈로그로 구분된다. 카탈로그 메뉴 설명 마이 카탈로그 사용자가 생성한 카탈로그 칵테일 카탈로그 Cocktail Cloud 기본 제공 공식 카탈로그 Filter Catalog 검색을 통해 필요한 템플릿...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6/",
        "teaser":null},{
        "title": "6.1 카탈로그 저장",
        "excerpt":"카탈로그를 생성하여 필요한 서버들을 묶어 한 번에 배포 할 수 있다. 워크로드 컨테이너 이미지가 빌드 인 경우에는 이미지만을 저장하여 공용이미지로 변환하여 카탈로그로 저장한다. 저장된 카탈로그는 서비스 카탈로그에서 확인 할 수 있다. 카탈로그 저장시 설정의 컨피그 맵, 시크릿도 템플릿으로 저장한다. (단, 시크릿은 보안상 값은 저장하지 않는다.) a) 서비스에서 카탈로그로 저장하는 서비스를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.1/",
        "teaser":null},{
        "title": "6.2 카탈로그 배포",
        "excerpt":"생성된 카탈로그를 배포할 수 있다. 필요 시 불필요한 인스턴스를 제외하거나 편집하여 배포 가능하다. a) 카탈로그 → 배포하고자 하는 템플릿의 ‘배포’ 버튼을 클릭 b) 템플릿 카테고리에서 서비스 그룹, 클러스터, 서비스 선택 후 ‘배포’ 클릭. 원하지 않는 인스턴스는 제외하고 배포할 수 있다. 신규 Service 배포 시 서비스 그룹, 클러스터를 선택하고 서비스, 네임스페이스...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.2/",
        "teaser":null},{
        "title": "6.3 카탈로그 편집",
        "excerpt":"생성한 카탈로그 내용을 편집할 수 있다. 템플릿의 버전, 요약정보, 편집 내용을 수정할 수 있으며 각 인스턴스의 배포 정보를 수정할 수 있다. a) 카탈로그 → 편집하고자 하는 템플릿 ‘편집’ 버튼을 클릭 b) 수정할 템플릿의 버전, 요약정보, 편집 내용을 수정하고, 화면 우측 하단 ‘편집’버튼 클릭하여 인스턴스의 배포 정보를 수정할 수 있다. c)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.3/",
        "teaser":null},{
        "title": "6.4 카탈로그 삭제",
        "excerpt":" 불필요한 카탈로그를 삭제할 수 있다. (칵테일 카탈로그는 삭제 불가)   a) 카탈로그 → 삭제하고자 하는 템플릿 ‘편집’ 버튼을 클릭     b) 삭제할 템플릿의 버전을 선택 후, ‘삭제’ 버튼을 클릭한다. 해당 템플릿 버전에 대하여 삭제된다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.4/",
        "teaser":null},{
        "title": "6.5 카탈로그 내보내기",
        "excerpt":" 존재하는 카탈로그를 내보내기할 수 있다. (칵테일 카탈로그는 내보내기 불가)   a) 카탈로그 → 내보내기 하고자 하는 템플릿 ‘편집’ 버튼을 클릭     b) 화면 왼쪽 상단의 ‘내보내기’ 버튼을 클릭 한다. 해당 카탈로그가 카탈로그명-버전.zip 로 다운로드 된다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.5/",
        "teaser":null},{
        "title": "6.6 카탈로그 가져오기",
        "excerpt":" 내보내기된 카탈로그 파일과 가져오기 기능을 통해 카탈로그를 생성할 수 있다. (칵테일 카탈로그는 가져오기 불가)   a) 카탈로그 → ‘가져오기’ 버튼을 클릭     b) ‘Choose File’ 버튼을 클릭해 가져오기 할 카탈로그 압축파일을 선택한 후 ‘저장’ 버튼을 누른다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.6/",
        "teaser":null},{
        "title": "7.클러스터",
        "excerpt":" 클러스터의 상태와 리소스, 서비스, 알람이 제공된다.                   클러스터 메뉴       설명                       리소스       노드풀, 스토리지, 게이트웨이의 정보 서비스                 서비스       전체 서비스의 CPU, Memory, Network 사용량 및 개별 서비스의 모니터링 서비스                 알람       클러스터의 이벤트 정보 관련 알람 서비스          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7/",
        "teaser":null},{
        "title": "7.1 클러스터 목록",
        "excerpt":"시스템관리자에 의해 등록된 Kubernetes 클러스터 목록 정보를 조회 하는 기능이다. a) 클러스터 → 정렬 버튼을 클릭하여 원하는 정렬기준을 선택한다. 클러스터 설정 설명 클러스터 클러스터 종류 상태 클러스터 상태 서비스 클러스터에 등록된 서비스 맵의 수 클러스터의 Request CPU 클러스터의 Request Memory 클러스터의 Request Volume 클러스터에서 게이트웨이 수(Ingress, Node Port, Loadbalancer의 합)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.1/",
        "teaser":null},{
        "title": "7.2 자원 현황",
        "excerpt":" 컴퓨팅 자원, 스토리지, 서비스 노출 리소스 상태의 정보를 종합적으로 확인 가능하다.   a) 클러스터 → 클러스터 선택 → 자원 현황를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.2/",
        "teaser":null},{
        "title": "7.3 서비스",
        "excerpt":" 전체 서비스의 총 CPU, Memory, Network 사용량과 개별 서비스의 네임스페이스, 인스턴스 현황 등을 조회 할 수 있는 화면이다. 서비스 명을 클릭하면 해당 서비스 맵 페이지로 이동할 수 있다.   a) 클러스터 → 클러스터 선택 → 서비스를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.3/",
        "teaser":null},{
        "title": "7.4 알람",
        "excerpt":" 클러스터에 대한 이벤트를 알람으로 받을 수 있다.   a) 클러스터 → 클러스터 선택 → 알람을 클릭한다.     b) 알람 명 클릭 시 상세 내용을 확인 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.4/",
        "teaser":null},{
        "title": "7.4.1 알람 목록",
        "excerpt":"알람은 다음 목록에서 발생 조건이 지속 시간 만큼 계속될 경우 발생한다. AlertManager 알람 ID ALM-001 중요도 warning 알람 이름 AlertmanagerDown 지속 시간 5분 발생 조건 Alertmanager 메트릭 수집이 안 될 경우 발생 조치 사항 Prometheus의 로그 및 Alertmanager의 로그와 이벤트를 확인한다. 필요할 경우, Pod를 재시작한다. 알람 ID ALM-002 중요도 warning...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.4.1/",
        "teaser":null},{
        "title": "7.5 서비스 노출",
        "excerpt":"  클러스터에 속한 서비스 노출과 인그레스 정보를 확인 할 수 있다.   서비스 명 클릭시 해당 서비스로 이동하며  클릭시 링크가 제공된다.   a) 클러스터 → 클러스터 선택 → 서비스 노출을 클릭한다.      b) 서비스 노출명 클릭 시 상세 내용을 확인 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.5/",
        "teaser":null},{
        "title": "7.6 스토리지 볼륨",
        "excerpt":"  클러스터에 속한 퍼시스턴트 볼륨 현황 및 상세정보를 제공한다.   a) 클러스터 → 클러스터 선택 → 스토리지 볼륨     b) 스토리지 볼륨 상세     c) 스토리지 볼륨 액션메뉴     d) 볼륨 요청 정보     e) 볼륨 정보     f) 스토리지 정보    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.6/",
        "teaser":null},{
        "title": "8.시스템 운영",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8/",
        "teaser":null},{
        "title": "Kubernetes as a service(Kaas) 클러스터 구성",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1/",
        "teaser":null},{
        "title": "GKE 클러스터 만들기",
        "excerpt":"GKE 클러스터를 배포하는 방법을 알아봅니다. Google Kubernetes Engine(GKE)에 로그인 https://cloud.google.com/kubernetes-engine/ 에서 Google cloud에 로그인합니다. 서비스 계정 만들기 1. IAM 및 관리자에서 Service Account 만들기. 서비스 계정에는 다음 역할이 필요합니다. project/viewer kubernetes-engine/admin service-account/user 역할 기반 액세스 제어(Identity and Access Management)를 사용하기 위한 필요 조건: rbac 생성시 사전 필수 요소 필요. 다음...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.1/",
        "teaser":null},{
        "title": "AKS 클러스터 만들기",
        "excerpt":"AKS 클러스터를 배포하는 방법을 알아봅니다. Azure Portal + Azure Cli를 사용하여 AKS(Azure Kubernetes Service) 클러스터 배포 사용자 인증을(OAuth) 위해 Azure AD(Active Directory)를 사용하도록 AKS(Azure Kubernetes Service)를 구성해야 합니다. 참조 : Azure Kubernetes Service와 Azure Active Directory 통합 설치 Azure에 로그인 https://portal.azure.com 에서 Azure Portal에 로그인합니다. 사전준비 Azure Active Drectory가 준비되어...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.2/",
        "teaser":null},{
        "title": "EKS 클러스터 만들기",
        "excerpt":"8.1.5 EKS 클러스터 만들기 Quick Start 8.1.5 EKS 클러스터 만들기 NAT Gateway 사용 EKS 클러스터를 배포하는 방법. Kubernetes 용 Amazon Elastic Container Service (Amazon EKS)를 사용하면 AWS의 Kubernetes를 사용하여 컨테이너 화 된 응용 프로그램을 쉽게 배포, 관리 및 확장 할 수 있다. 참조 : Amazon Elastic Container Service for Kubernetes(EKS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.3/",
        "teaser":null},{
        "title": "EKS 클러스터 정책 / 권한",
        "excerpt":"EKS 관리 역할(EKS 생성시 필요한 역할) 만들기. IAM(Identity and Access Management) 에서 역할(Roles)을 선택합니다. Roles 화면에서 [Create role]를 선택합니다. Create role 화면의 Select type of trusted entity 섹션에서 : AWS service 선택한다. Create role 화면의 Choose the service that will use this role 섹션에서 : EKS 선택한다. Create role 화면의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.4/",
        "teaser":null},{
        "title": "EKS 클러스터 만들기 Quick Start",
        "excerpt":"1. 필수 Role(역할) / Policy(정책) 만들기 a. EKS 관리 역할 만들기. b. IAM(services) &gt; Roles &gt; Create role 화면에서 i. EKS 선택 : AmazonEKSClusterPolicy , AmazonEKSServicePolicy (default로 구성되어 있다) ii. Next: Permissions &gt; Next: Tags &gt; Next: Revies iii. Review 화면에서 1) Role name : EKSClusterRole 2) Create role 클릭...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.5/",
        "teaser":null},{
        "title": "EKS NAT Gateway 사용",
        "excerpt":"EKS NAT Gateway 구성도 Name 규칙 zone 으로 구분 되는 경우 zone 명칭을 사용 한다. EKS Cluster name : cocktail-eks-cluster (중복 될수 없다.) VPC name : eks-cluster-vpc Subnets name : - availability zone A : Public subnet-&lt;A zone&gt;-nat1 , Private subnet-&lt;A zone&gt;-nat1 - availability zone B : Public subnet-&lt;B zone&gt;-nat2...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.6/",
        "teaser":null},{
        "title": "AZURE FILE 공유 만들기",
        "excerpt":"AZURE Storage Accounts Storage Accountss는 Azure File 공유 또는 Blob나 Queue와 같은 다른 저장소 리소스를 배포할 수 있는 저장소의 공유 풀입니다. 저장소 계정에 포함될 수 있는 공유 수에는 제한이 없습니다. 공유에 저장할 수 있는 파일 수에는 제한이 없으며, 저장소 계정의 최대 용량까지 저장할 수 있습니다. 1. 왼쪽 메뉴 또는 Home...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.1.7/",
        "teaser":null},{
        "title": "클러스터 직접 구성 WITH CUBE",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2/",
        "teaser":null},{
        "title": "Onpremise에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.1/",
        "teaser":null},{
        "title": "AWS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.2/",
        "teaser":null},{
        "title": "Azure에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Files Service가 준비되어...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.3/",
        "teaser":null},{
        "title": "GCP에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.4/",
        "teaser":null},{
        "title": "Aliyun에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.5/",
        "teaser":null},{
        "title": "AKS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Storage Account(Azure File)가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.6/",
        "teaser":null},{
        "title": "EKS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.7/",
        "teaser":null},{
        "title": "GKE에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) GKE 서비스 계정 키가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.8/",
        "teaser":null},{
        "title": "CUBE 클러스터 타입",
        "excerpt":"클러스터의 사용 규모와 HA 구성 여부에 따라 타입을 구분 Large(HA) : 워커 노드 250대 이상, External ETCD 클러스터 구성, Shared Storage 이중화 옵션 Medium(HA) : 워커 노드 10 ~ 250대 규모, Stacked ETCD 구성, Shared Storage 이중화 옵션 Small : 워커노드 10대 미만 규모, 단일 마스터(백업 구성), Shared Storage 이중화...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.2.9/",
        "teaser":null},{
        "title": "Cube CLI",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3/",
        "teaser":null},{
        "title": "`init` command",
        "excerpt":"init는 Cocktail Cluster를 설치하려는 플랫폼에 맞는 cube.toml 을 다운로드한다. Usage cube init [flags] Flags [ provider ] provider (필수) --provider, -p Cocktail Cluster를 설치할 플랫폼의 이름을 지정한다. 현재 버전에서 지원하는 provider 목록은 아래와 같다   flag 값 Provider onpremise On-premise aws Amazon Web Service azure Microsoft Azure gcp Google Compute...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.1/",
        "teaser":null},{
        "title": " `cluster get-config` command",
        "excerpt":"cluster get-config는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster의 설치 정보 파일을 다운로드한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.10/",
        "teaser":null},{
        "title": "`cluster delete` command",
        "excerpt":"cluster delete는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 삭제한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할 수 있다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.11/",
        "teaser":null},{
        "title": "`cluster set-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 설치 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.12/",
        "teaser":null},{
        "title": "`cluster del-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 삭제 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.13/",
        "teaser":null},{
        "title": "`destroy` command",
        "excerpt":" destroy는 서버 인스턴스에서 Cocktail Cluster를 제거 한다.     Prerequisite  Cocktail Cluster 설치 상태.create command   Usage      cube destory  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.14/",
        "teaser":null},{
        "title": "`create` command",
        "excerpt":"create는 Cocktail Cluster를 init으로 준비한 플랫폼에 설치한다. Prerequisite init command Usage cube create Cocktail Cluster를 설치한다. Flags [ target ] Cocktail Cluster를 설치할때 상세정보를 tail -f log/cube.log로 확인할 수 있습니다. target (선택) [ registry | storage | cocktail | addon ] --target 설치 module을 지정 할 수 있다. Cocktail module을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.2/",
        "teaser":null},{
        "title": "`status` command",
        "excerpt":" status는 Cocktail Cluster의 현재 상태를 출력한다.     Usage   cube status   Output      etcd 상태   node 상태   Kubernetes pod 상태   cocktail system pod 상태   cocktail addon pod 상태   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.3/",
        "teaser":null},{
        "title": "`login` command",
        "excerpt":"login는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online에 로그인 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Usage cube login [flags] Flags [ url | id | password | system ] url (필수) --url, -u 접속할 Cocktail DashBoard의 Url을 입력 한다. id (필수) --id, -i ID 정보를 입력 한다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.4/",
        "teaser":null},{
        "title": "`logout` command",
        "excerpt":" logout는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online 서비스에서 로그아웃 한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      cube logout   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.5/",
        "teaser":null},{
        "title": "`cluster register` command",
        "excerpt":" cluster register는 설치된 Cocktail Cluster를 Cocktail DashBoard 또는 Cocktail Online에 등록 할 때 사용한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster register  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.6/",
        "teaser":null},{
        "title": "`cluster list` command",
        "excerpt":" cluster list는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 정보를 표시한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster list  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.7/",
        "teaser":null},{
        "title": "`cluster resize` command",
        "excerpt":" cluster resize는 노드의 개수를 늘리거나 줄일 때 사용한다.    Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command   Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다.  register command    Usage   vi cube.toml  [[node-pool.nodes]] ip 항목을 수정 합니다.      Cocktail Cluster resize  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.8/",
        "teaser":null},{
        "title": "`cluster upgrade` command",
        "excerpt":"cluster upgrade는 설치된 Cocktail Cluster를 upgrade한다. 현재 지원가능한 버전은 1.13.1 버전에서 1.13.2, 1.13.3, 1.13.5 버전으로의 **upgrade를 지원한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Usage vi cube.toml [cube]...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.3.9/",
        "teaser":null},{
        "title": "8.4 클러스터 운영",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4/",
        "teaser":null},{
        "title": "Cube cluster startup & shutdown",
        "excerpt":"Cube cluster의 startup과 shutdown은 일련의 순서대로 진행해야 한다. Startup Startup시에는 master node를 먼저 기동하고 worker node를 기동하는 순서로 진행한다. 1) Master Node # systemctl start etcd # systemctl start docker # systemctl start kubelet 2) Worker Node # systemctl start docker # systemctl start kubelet Shutdown Shutdown시에는 startup시와는 반대로 worker...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.1/",
        "teaser":null},{
        "title": "8.4.10 Alarm Message 슬랙 / Email 연결",
        "excerpt":"Alarm Message 앱을 생성한 채널에 연결 채널을 생성 합니다. (name : cube-alarm) 아래 URL로 제공 되는 앱의 Incoming Webhook(Send data into Slack in real-time)을 생성 합니다. https://slack.com/apps/A0F7XDUAZ-incoming-webhooks (로그인 필요) Add Configuration 버튼을 클릭 합니다. 메세지를 출력할 채널을 선택 또는 생성 합니다. Add Incomming WebHooks integration 버튼을 클릭하면 다음화면에서 Webhook URL을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.10/",
        "teaser":null},{
        "title": "Update cube cluster certificate",
        "excerpt":"Kubernetes를 구성하는 각 컴포넌트들도 내부 인증서를 통해 통신한다. 필요에 의해 이 인증서를 update해야 하는 경우 아래의 절차대로 수행한다. 1.먼저 각 master node와 worker node의 기존 인증서를 삭제한다. # ssh to master node # rm -rf /opt/kubernetes/pki # rm -rf /etc/kubernetes/pki 2.인증서를 재 생성한다. 이전에 설치를 진행한 디렉토리에서 cert.yaml을 실행하여 인증서를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.2/",
        "teaser":null},{
        "title": "Add etcd member to existing etcd cluster",
        "excerpt":"Etcd cluster가 가동중인 상태에서 etcd member를 추가하는 방법에 대해 기술한다. etcd 인증서 디렉토리: /etc/kubernets/pki/etcd etcd 설정파일: /etc/etcd/etcd.conf 1.etcd ca 파일을 기반으로 추가하고자 하는 etcd node에서 etcd 인증서를 생성한다. # cube.toml에 추가할 etcd node 정보를 기입한다. etcd cluster는 반드시 홀수개의 node로 구성되어야 하며, 최대 5개로 구성하는 것을 권고한다. $ vi cube.toml...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.3/",
        "teaser":null},{
        "title": "Cube cluster backup & restore",
        "excerpt":"Cube cluster가 어떤 이유로 인해 재설치할 경우를 대비하여 kubernetes workload의 데이터베이스 역할을 수행하는 etcd 데이터의 백업은 반드시 주기적으로 수행되어야 한다. 또한, 칵테일이 설치되어 있는 경우에는 칵테일 데이터베이스도 주기적으로 백업하여 cluster장애로 인한 재설치시에 사용하도록 한다. etcd 인증서는 반드시 기존 설치시에 사용된 인증서를 사용해야 하며, 그렇지 않을 경우 복원할 수 없다. etcd...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.4/",
        "teaser":null},{
        "title": "Docker container disk 관리",
        "excerpt":"Container 내에서 stdout, stderr로 출력을 보내면 docker overlay storage driver를 사용하는 경우 $DOCKERROOT/containers/{containerid}/containerid-json.log 파일에 저장되며 별다른 조치를 하지 않을 경우 계속 증가하게 된다. 이를 방지하기 위해 아래와 해당 디렉토리에 logrotation 설정파일을 추가한다. 아래 /data/docker 디렉토리가 $DOCKER_ROOT임. 1./etc/logrotate.d/docker-container # Added by cube /data/docker/containers/*/*.log { daily rotate 4 compress size=10M missingok delaycompress...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.5/",
        "teaser":null},{
        "title": "칵테일 암호 관리",
        "excerpt":"1.칵테일 로그인 암호 관리. 1) 칵테일 암호 관리 대상은 칵테일이 설치된 모든 cluster를 대상으로 한다. 2) 암호는 “영문대소문자 + 특수기호(!@#$%^&amp;*=+-_) + 숫자” 조합으로 최소 8자 이상 최대 24자리까지 생성 가능하다. 3) 암호 변경 주기는 90일이며, 90일이 지나서 칵테일에 로그인할 경우 암호 변경 화면이 표시된다. 암호 변경화면에서 “다음에 변경하기”를 선택하면 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.6/",
        "teaser":null},{
        "title": "캐시 메모리 증가에 따른 클러스터 노드 메모리 최적화 방법",
        "excerpt":" 클러스터를 구성하는 각 node는 cache memory가 점차적으로 증가하게 되어 있다.   주기적으로 각 node에서 아래 명령을 수행함으로써 cache memory를 초기화 할 수 있다.   # sync; echo 3 &gt; /proc/sys/vm/drop_caches 또는 # sync; sysctl -w vm.drop_caches=3   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.7/",
        "teaser":null},{
        "title": "칵테일 클라우드에서 스토리지 볼륨 스케일업 방법",
        "excerpt":"워크로드가 스토리지 볼륨(Persistent Volume)을 사용 중, 용량이 부족 할 경우 스토리지의 용량을 확장 할 경우가 있다. 이 경우 칵테일에서는 아래와 같이 조치하면 된다. 쿠버네티스에서는 몇몇 클라우드 프로바이더의 스토리지 클래스를 통해 PVC의 요청량을 늘리면 PV 및 해 당 스토리지의 용량이 자동 확장 된다. 이 때 PV는 Capacity 량이 조정 되며, 연결된...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.8/",
        "teaser":null},{
        "title": "AWS Billing Report 생성",
        "excerpt":"AWS 청구 및 비용 관리는 AWS 사용에 대한 청구 보고서 세트를 제공한다. 이 보고서에는 사용한 AWS 서비스, 사용 시간, 전송 한 데이터의 양, 사용한 평균 저장 공간 등이 표시됩니다. 사전준비 AWS Management Console에 루트 사용자로 로그인 해야 한다. AWS Cost and Usage report 생성 1. 루트 사용자로 Sign in to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.4.9/",
        "teaser":null},{
        "title": "Troubleshooting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5/",
        "teaser":null},{
        "title": "k8s cluster의 health check",
        "excerpt":"Cube로 설치한 장비에서 Kubernetes와 칵테일의 주요 구성 요소에 대해 상태 체크를 하기 위한 방법은 아래와 같다. 이는 cube로 설치후 k8s 주요 구성 요소의 정상 동작 여부를 확인하는데 사용할 수 있다. cube status 명령을 통한 etcd, k8s pod, monitoring pod, 칵테일 pod 상태를 체크할 수 있다. etcd daemon은 kubernetes에서 생성되는 각종...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5.1/",
        "teaser":null},{
        "title": "사용자의 micro service가 서로 연결이 안될때.",
        "excerpt":"일반적으로 k8s에서 각 Container들은 연관된 Container와 통신하기 이해 Kubernetes DNS를 사용한다. 즉 POD는 생성과 삭제가 일어나면 POD가 가지고 있던 내부 cluster ip는 변동되게 됨으로 일반적으로 micro service들을 k8s dns를 통해 필요한 container를 찾는다. 먼저 k8s의 DNS 서비스가 정상 동작 중인지 확인하는 방법은 busybox를 생성하고 컨테이너에 접속해서 nslookup명령으로 k8s의 DNS에 접속되는지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5.2/",
        "teaser":null},{
        "title": "NFS 서버의 접속 확인 방법.",
        "excerpt":"칵테일 서비스는 기본적으로 Storage class를 이용하여 persistence volume을 사용한다. local 및 baremetal 환경에서는 NFS 서버를 구축하여 Storage class로 활용하며 public cloud에서는 해당 서비스 제공자가 기본적으로 제공해 주는 storage class를 사용하게 된다. 본 문서는 local 및 Baremetal 환경에서 NFS 서버의 상태 및 칵테일 service와의 연결이 정상적인지 확인하는 방법을 기술한다. NFS 서버의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5.3/",
        "teaser":null},{
        "title": "Cube로 설치한 node의 ip 정보가 변경될 경우.",
        "excerpt":" cube로 설치한 master node, worker node에서 ip 정보가 변경되면 현재로서는 cube를 이용하여 재설치하는 방식을 권장한다.   이는 k8s의 component중 api server, scheduler, control manager가 ip 인증서 기반으로 통신하며, etcd의 flannel subnetwork정보도 ip정보가 저장되기 때문이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5.4/",
        "teaser":null},{
        "title": "Centos yum 자동 upgrade 방지",
        "excerpt":"칵테일은 kubernetes package의 버전에 따라 설정파일의 차이가 있으므로, 시스템에서 yum upgrade가 자동으로 설정되어 있으면 시스템 업그레이드시에 칵테일 관련 설정이 override 될 수 있으므로 반드시 security 부분만 자동으로 업그레이드가 되도록 수정해야 한다. 만약 그렇지 않으면, 시스템의 재기동이 필요한 업그레이드나 칵테일 관련 설정파일이 override 되면서 서비스가 중단될 수 있다. yum-cron 설정 파일...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8.5.5/",
        "teaser":null},{
        "title": "9.구성원",
        "excerpt":" 현재 워크스페이스에 속한 구성원들 정보를 보여준다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/9/",
        "teaser":null},{
        "title": "기본 문서 양식 / 서식",
        "excerpt":"Description 요약 또는 참고 링크 부제 부제의 목차 부제 부제의 구분은 수평선 으로 구분 한다. 1. 부제의 목차 설명 2. 부제의 목차 설명 1. list 설명 2. list 설명 3. 코드 블럭 표현식 코드 블럭 사용법 코드 블럭 표현식은 해당 CSS가 지원 되야 한다. javascript 코드 블럭 text 코드 블럭...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/_/data/navigation.yml%20url%20%EC%A0%95%EB%B3%B4",
        "teaser":null},{
        "title": "层积云是什么?",
        "excerpt":" 层积云是一种 容器一体化管理平台(All-in-one Container Management Platform)。   随着云服务的普遍使用，除了基础架构，对应用程序、服务管理的要求也越来越高。像过去的 开发和运营方式充分发挥云的优势是有限的。尤其是应用程序领域，持续整合以及部署 (Continuous Integration/Deploy，CI/CD)、迁移(Migration)、多云/混合云的构筑等自动化、高 效化、整合管理的需求日益增加。   可以说容器技术的扩散是理所当然。目前很多企业已经引进了容器技术，呈现继续增强趋势。 (参考: http://redmonk.com/fryan/2017/09/10/cloud-native-technologies-in-the-fortune-100)   容器是将应用程序或服务压缩成可独立运行单位的技术，无论基础架构环境如何，都可以提供 相同的开发和运营经验。可以实现从基础架构到服务的云管理体系标准化，也可以减少开发及 运营工作量。尤其是不变的环境下，能管理好多云/混合云是它的优点所在。   层积云将容器优点适用于云管理服务，实现了开发及运营业务的高效化，为单一或多云/混合云 战略实施提供了平台。   层积云的主要职能如下      从代码到 Build、部署、更新环节的渠道自动化;   工作负载(服务)中心的容器管理:压缩、生命周期、资源等;   全栈监控:从基础架构到容器的状态以及资源的监控、报警管理;   多云/混合云集群配置及管理:Baremetal、私人/公共云。     下文 : 层积云组件概要  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.0/",
        "teaser":null},{
        "title": "层积云组件概要",
        "excerpt":" 层积云根据其功能划分了 5 个图层。              集群管理层(Cluster Management Layer): 负责容器部署/运行的基础架构(集群)及编排 (Orchestration)的图层。编排由 Kubernetes(https://kubernetes.io)负责，提供基础架构管理、 监控等扩展管理职能。            服务管理层(Service Management Layer): 负责基于服务(Workload)的容器配置和管理的 图层。压缩服务配置的多个容器及相关对象，并管理其生命周期及监控。            渠道(Pipeline): 实现了从代码到容器 Build、部署过程的自动化，并执行持续的整合/部署。 用户可通过设置和脚本构筑所需要的渠道。            目录(Catalog): 提供通用运行时间(DB、中间件等)模板的图层。需要模板时，不需要额 外配置，可直接部署和使用。并且，还可以保存和管理用户应用程序的快照。            仪表盘(Dashboard): 提供集群、服务现状和监控视图。       下面继续了解各图层的详细内容。     上文 : 层积云介绍   下文 : 集群管理层(Cluster Management Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.1/",
        "teaser":null},{
        "title": "集群管理层(Cluster Management Layer)",
        "excerpt":"集群管理层又分为组成集群的基础架构脚本和容器编排引擎部分。其具体配置如下图。 层积云根据用户设置，自动配置(Provisioning)集群基础架构和编排引擎，CUBE 就是负责该领 域的工具。CUBE 组建高可用性(High Availability，HA)的 Kubernetes 集群。由 CUBE 配置的集 群提供高稳定性和安全性以及扩展性。(叫做 CUBE 集群) 目前 CUBE 集群支持以下云平台及供应商。CUBE 可基于基础架构独立配置，所以任何基础架 构上都可以配置。以下是基础架构自动配置为准。 物理架构(Baremetal) 云平台 : Openstack, Cloudstack, VMWare 云服 : AWS, GCP, Azure CUBE 工具还提供集群 Kubernetes 版本的升级，以及节点(物理/虚拟机)的添加/删除、备份 等集群管理职能。 层积云对多云进行整合管理。即，分配到需要一个以上集群的服务，并对整个集群执行管理和 监控。集群可按照需求添加。 CUBE 集群额外提供管理为目的的扩展组件。 监控(Monitoring) : 基础架构、容器、服务(Workload)的状态、配置、资源监控 预警(Alerting) : 当满足特定条件时，通过邮件、MSN 方式发送警告以及管理 计量(Metering) : 如果是公共云集群，查询使用费用 检查(Inspecting) :...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.2/",
        "teaser":null},{
        "title": "服务管理层(Service Management Layer)",
        "excerpt":"通常情况下一个应用程序及服务由多个容器组成。尤其是类似 Kubernetes 的编排引擎，容器以 外还需额外增加服务端口、控制器、卷等对象。因此基于容器的应用程序及服务管理，需要压 缩和管理容器以及相关对象的抽象单位。服务管理层就是负责该领域的图层。 层积云的服务管理拥有如下阶层架构。 服务(Service) : 是最上游阶层，分配和管理服务所必要的集群资源、映像注册表、映像 Build 的群组。根据开发人员和运营人员的角色赋予权限，能独立进行管理。层积云可根据需求， 创建多个服务，并按组或服务分配以及管理。 服务地图(Service Map) : 是组成和管理应用程序的单位，相当于一个工作负载 (Workload)。例如一个服务可以由开发阶层、验证阶层、运营阶层的应用程序表组成，也 可以按照数据管理、分析系统类似功能组成应用程序表。从逻辑角度上，可以说应用程表 是管理工作负载为目的的由多个容器组成的单位。如前所述，服务由一个以上的应用程序 表组成。 层积云服务器(Cocktail Server) : 是容器和相关编排对象的压缩单位。应用程序表由一个 以上的层积云服务器组成。例如，可以 Web 服务器、DB 服务器等类似组件为准组成服务 器，也可以由小规模微服务为准组成层积云服务器。关于层积云服务器，后面进一步详细 说明。 下图是服务管理图层的配置图。 层积云服务器(Cocktail Server) 层积云服务器在服务管理层发挥最核心的功能。如前所述，层积云服务器是容器和相关编排对 象的压缩单位。层积云管理压缩对象的创建、更新等生命周期，同时把状态和资源作为一个压 缩单位进行监控以及管理。 以下是图实例。 层积云提供的管理职能有如下内容: 工作负载的创建、修改(更新)、停止、重启、删除、自动缩放 滚动更新 卷管理 服务端口管理 监控 检查 : 编排对象的状态以及部署信息查询 网络终端、日志查询 : 容器壳连接、容器日志查询 上文...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.3/",
        "teaser":null},{
        "title": "管道层(Pipeline Layer)",
        "excerpt":" 管道层实现了从代码到容器的 Build 及部署的自动化。   Build 按照用户设置，依次执行代码下载、代码 Build 以及测试等作业(Task)、容器映像 Build。 作业(Task)使用的是执行内部作业的容器，除了默认提供的容器以外，用户可扩展使用公开或 用户制作的容器。   层积云服务器容器对已 Build 的映像进行滚动更新。通过 Build 制作的映像，将自动生成 Build 编码，再通过这个编码执行最新版本或者回滚。   从 Build 到部署的所有作业执行环节，均通过管道层实现了自动化。因此，只需创建一次 Build 和管道层，开发人员可以集中编写代码和修改作业。   下图为管道层的配置图。      管道层通过持续整合和部署(CI/CD)，为 DevOps 提供基础架构。   DevOps 强调开发和运营之间的连续性和有机协作。CI/CD 是 DevOps 的必要组件之一，同样在基于容器的开发和运营领域也非常重要。     上文 : 服务管理层(Service Management Layer)   下文 : 目录层(Catalog Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.4/",
        "teaser":null},{
        "title": "目录层(Catalog Layer)",
        "excerpt":" 容器对其组成进行图像化处理，然后部署以及运行。因此，只要把容器映像和部署信息模板化，可以节省常用 DB 或中间件等反复作业的运行时间，必要时可随时轻松部署使用。   目录层是负责创建和管理上述模板的图层。目录层的配置图如下:      目录按照其目的划分为两种类型。      服务目录(Service Catalog) : 服务目录存储和管理用户以服务目的组成的应用程序快照。基 础架构或云供应商的交替等原因需要迁移时，可使用服务目录的快照功能。快照原样保存 应用程序表的配置。所以部署在其他环境时，应根据需求修改快照设置后再部署。   平台目录(Platform Catalog) : 指层积云通过‚层积云集线器‛提供的运行时间模板。用户 可以模板本身或根据自身环境修改设置后再部署。目前平台目录提供 DB、中间件、开发/ 运营工具、博客、机器学习等广泛使用的开源模板，并持续更新。     上文 : 管道层(Pipeline Layer)   下文 : 仪表板层(Dashboard Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.5/",
        "teaser":null},{
        "title": "仪表板层(Dashboard Layer)",
        "excerpt":" 层积云的仪表板层以 Web UI 形式，提供服务现状、监控、集群现状等。   仪表板按照权限分类，提供和用户角色相对应的视图。层积云的用户权限如下:           管理员(Administrator)(Admin) : 执行集群管理，对层积云的所有服务拥有管理权限。            DevOps : 只对一个以上的服务分配拥有管理权限。仪表板只提供没有权限的服务视图，不能管理集群管理、环境设置等。       层积云提供的仪表盘视图如下           综合仪表盘 : 对所有服务和集群现状进行综合显示的视图            服务管理视图 : 创建、部署、监控、运营服务为目的的 DevOps 用户视图            目录视图 : 能查询和部署服务目录和平台目录的视图            集群视图 : 能整合一个以上的集群，并管理和监控的视图            环境设置 : 层积云平台的设置视图         上文 : 目录层(Catalog Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.6/",
        "teaser":null},{
        "title": "1. 登录",
        "excerpt":" 以下是层积云的初始登录画面。   输入 System、ID、密码后可以登录。   (ID 另询管理员)      初始连接或初始化密码时，密码必须修改。      90 天后可修改密码或延长使用。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/1/",
        "teaser":null},{
        "title": "10.术语说明",
        "excerpt":" 为了帮助用户了解层积云的运用，下面对 Kubernetes 及层积云的术语进行了整理。  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/10/",
        "teaser":null},{
        "title": "10.1 Kubernetes(k8s)",
        "excerpt":"1.集群 术语 说明 Namespace k8s 的虚拟集群，可以为用户提供分组或分项目的额外操作环境 Nodes 驱动 k8s 已分组的应用程序物理服务器或 VM Persistent Volumes(PV) 支持在外部存储、NFS、iSCSI、云上提供的存储系统 Roles 根据使用情况授权 Storage Classes 对 PV 进行动态配置时，用于识别 NFS 服务器的标识符 2.工作负载 术语 说明 Cron Jobs 如”在特定时点一次”或者”在特定时点反复”,基于时间的管理作业 Deployments 用于创建 Pod 的设定值注册信息 Jobs Job 是执行批处理的 Pod 的 Supervisor。即，如特定的计算或备份，只在特定 时间内运行的处理器 Pods 由 1 个以上容器组成的 k8s 里最小的部署单位。Pod 是在应用程序全栈中由 不同的 Docker 映像组合而成...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/10.1/",
        "teaser":null},{
        "title": "10.2 层积云",
        "excerpt":"1.环境设置 为了使用层积云，事先注册信息的服务。 术语 说明 用户 为层积云使用用户，提供管理支持 账号 支持 k8s 集群用户认证信息的管理 服务 业务或项目为单位，分散管理作业。相比一般用户，管理员可赋予访问服务单位 的权限 C.集群:为了使用 k8s，管理 k8s 信息的页面 2.服务 应用程序为单位细分作业，可通过 Build 创建 Docker 映像。通过已 Build 映像，对应用程序实 施创建、查看、修改、删除等管理的服务。 术语 说明 应用程序表 k8s 的命名空间 Build 支持 Docker 映像作业的服务 监控 在应用程序内部，对服务器提供 Pod、容器为单位的资源监控 管道 从 Build 到部署，可一次性方便运行的服务 设置 应用程序单位，能保存并使用参数值或文件的服务 3.目录 通过应用程序配置的模板化，可轻松创建、部署、编辑管理服务器的服务。 4.集群 可查询集群、节点、应用程序、卷/存储、报警、计量等的注册管理以及现状的服务。 术语 说明...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/10.2/",
        "teaser":null},{
        "title": "10.3 层积云系统故障代码",
        "excerpt":"1. 故障代码 代码 信息 CCCM001 无法显示具体错误代码。 CCCM002 未知错误。 CCCM004 无效函数导出的参数。 CCCM005 未经认证的请求。 CCCM006 传递信息不正确。 CCCM007 服务器、作业等不正确或者无法处理请求。 CCCM019 内部服务器错误。 CCCM020 外部导出API返回错误或导出失败。 CCCM023 无需要执行的作业。 CCCM026 发生了错误。 CCCM027 注册中发生了错误。 CCCM028 修改中发生了错误。 CCCM029 删除中发生了错误。 CCCM030 查询中发生了错误。 CDCM031 数据库作业中发生了错误。请稍后再尝试。仍未改善时，请咨询管理员。 CDCM032 数据库连接中发生了错误。请稍后再尝试。如果可以，请检查数据库连接状态，或者咨询管理员。 CKSY001 Cube集群API发生了错误。 CKSY002 层积云不支持Cube集群版本。 CKSY003 加密中发生了错误。 CCUS001 未注册的用户ID。 CCUS002 用户密码不一致。 CCUS003 用户指定权限未分配的用户。 CCUS004 已注册用户。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/10.3/",
        "teaser":null},{
        "title": "11.售后服务",
        "excerpt":" 非常感谢使用层积云。   可享受产品功能购买咨询等技术服务以及各种优惠。所提供的各种服务如下:      可通过访问服务，咨询 Q&amp;A、产品相关信息以及其他疑问。   对客户已注册产品和可咨询产品，可通过电话或传真进行专业技术咨询服务。   提供各种活动邀请以及信息。   服务支持   邮箱 : byoungoh.lee@namutech.co.kr   产品开发商   ACON 软件(株)      地址 : 首尔特别市 江南区 驿三路 239 号 华光中心 4 层   TEL : 02-554-0301   FAX : 02-554-0302  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/11/",
        "teaser":null},{
        "title": "2.시스템 관리",
        "excerpt":" 칵테일 클라우드 이용에 필요한 시스템, 클러스터, 워크스페이스를 관리 할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2/",
        "teaser":null},{
        "title": "2.1 시스템",
        "excerpt":"시스템 이용에 필요한 시스템 정보, 계정 정보, 클라우드 미터링 계정, 시스템 사용자를 관리 할 수 있다. a) 좌측 메인메뉴 → 시스템 시스템 정보 설명 시스템 명 칵테일 클라우드의 시스템 이름 시스템 접속 계정 칵테일 클라우드 접속을 위한 시스템 계정 시스템 유형 칵테일 클라우드 시스템 사용 유형 기본 언어 칵테일 클라우드...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1/",
        "teaser":null},{
        "title": "2.1.1 시스템 편집",
        "excerpt":"시스템 이용에 필요한 시스템 정보, 계정 정보를 수정 할 수 있다. a) 좌측 메인메뉴 → 시스템 → 우측 상단 편집 버튼 시스템 정보(기본 언어, 시스템 로고, 시스템 설명)와 계정 정보(조직명, 계정 담당자 명, 계정 담당자 이메일, 주소)를 수정 할 수 있다. b) 좌측 메인메뉴 → 시스템 → 편집 → 수정완료...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 클라우드 미터링 계정 등록",
        "excerpt":"  클라우드 미터링 계정 등록 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 등록                Amazon Web Service             Google Cloud Plalform       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 클라우드 미터링 계정 편집",
        "excerpt":"  클라우드 미터링 계정 편집 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 액션 메뉴 → 계정 편집 → 수정완료 후 수정버튼을 클릭한다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 클라우드 미터링 계정 삭제",
        "excerpt":"  클라우드 미터링 계정을 삭제 할 수 있다.   a) 좌측 메인메뉴 → 시스템 → 계정 액션 메뉴 → 계정 삭제    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.4/",
        "teaser":null},{
        "title": "2.1.5 시스템 사용자 추가",
        "excerpt":"  시스템 사용자를 추가 하는 기능이다.  a) 좌측 메인메뉴 → 시스템 → 사용자 추가를 클릭한다.                       시스템 사용자       설명                       이름       시스템 사용자 이름                 아이디       칵테일 클라우드 접속 사용자 아이디                 설명       시스템 사용자 설명          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.5/",
        "teaser":null},{
        "title": "2.1.6 시스템 사용자 편집",
        "excerpt":" 시스템 사용자 정보(이름, 설명)를 편집 하는 기능이다.   a) 좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 편집를 클릭한다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.6/",
        "teaser":null},{
        "title": "2.1.7 시스템 사용자 비밀번호 초기화",
        "excerpt":"  Cocktail Cloud 사용자 비밀번호를 초기화 하는 기능이다.(초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.)   a)  좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 비밀번호 초기화를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.7/",
        "teaser":null},{
        "title": "2.1.8 시스템 사용자 삭제",
        "excerpt":" 시스템 사용자를 삭제하는 기능이다.   a)  좌측 메인메뉴 → 시스템 → 사용자 액션 메뉴 → 사용자 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.8/",
        "teaser":null},{
        "title": "2.2 集群",
        "excerpt":" 提供集群的注册管理，以及节点和应用程序为单位的监控、卷、报警和计量服务。                   集群菜单       说明                       节点       所有节点的 CPU、内存、网络使用量以及个别节点的监控服务                 应用程序       所有应用程序的 CPU、内存、网络使用量以及个别应用程序的监控 服务                 卷       存储管理以及卷现状                 报警       集群事件信息相关的报警服务                 计量       集群费用及各种资源费用服务                 注册管理       集群的查看、修改、删除           ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2/",
        "teaser":null},{
        "title": "2.2.1 클러스터 등록",
        "excerpt":"클러스터를 추가 등록할 수 있는 기능이다. a) 클러스터 → 오른쪽 상단 + 클러스터 등록 버튼을 클릭한다. b) 프로바이더 정보(프로바이더, 유형, 리전)를 입력한다. 계정의 프로바이더와 유형에 따라 입력란이 변경된다. Google GKE, Azure AKS 선택시 사용자 계정 인증 정보 대신 Google과 Azure ID로 인증이 필요하다. 프로바이더 설명 프로바이더 프로바이더를 선택 유형 Kubernetes의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.1/",
        "teaser":null},{
        "title": "2.2.2 클러스터 수정",
        "excerpt":"  클러스터의 기본정보, 프로바이더, 모니터링, 클러스터 유형을 수정하는 기능이다. 프로바이더의 계정, 유형, 리전, 프로젝트 아이디, 서브스크립션 아이디, 클러스터 정보는 변경할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 수정버튼 → 수정 완료 후 저장버튼을 클릭한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 클러스터 삭제",
        "excerpt":" 클러스터 정보를 삭제하는 기능이다. 해당 클러스터를 사용하고 있는 어플리케이션 맵이 있을 경우 삭제할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 삭제버튼을 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.3/",
        "teaser":null},{
        "title": "2.2.4 볼륨",
        "excerpt":"Public Cloud 스토리지 및 외부 스토리지 정보를 등록하고, 볼륨 현황에 대한 모니터링 서비스를 제공한다. a) 클러스터 → 클러스터 선택 → 볼륨을 클릭한다. 스토리지 설정 정보 설명 + 버튼 스토리지 추가 페이지로 이동 이름 스토리지 이름(사용자지정) 타입 스토리지 종류(NFS/EBS/Google Persistent Disk/Azure Disk) 스토리지 클래스 이름 k8s에 등록된 Class Name 정책 스토리지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.4/",
        "teaser":null},{
        "title": "2.2.5 스토리지 추가",
        "excerpt":"볼륨을 추가하여 사용 할 수 있다. a) 클러스터 → 클러스터 선택 → 볼륨을 클릭 → 오른쪽 상단 + 모양의 버튼을 클릭한다. b) 클러스터, 이름, 설명, 스토리지 플러그인, 정책, 스토리지 클래스 이름, 스토리지 프로비저너 또는 플러그인 설정을 차례로 기입한다. 스토리지 등록 정보 설명 이름 PV 이름 설명 PV 사용자 설명 스토리지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.5/",
        "teaser":null},{
        "title": "2.2.6 스토리지 편집",
        "excerpt":" 등록된 스토리지 정보를 편집하는 기능이다. 단, NFS Named 타입의 스토리지는 편집할 수 없다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션 버튼 → 스토리지 편집을 클릭한다.     b) 플러그인 유형에 따라 이름, 설명 등을 수정 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.6/",
        "teaser":null},{
        "title": "2.2.7 存储删除",
        "excerpt":" 删除已注册存储信息的功能。   a) 集群→选择集群→卷→卷操作按钮→点击卷删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.7/",
        "teaser":null},{
        "title": "2.3 워크스페이스",
        "excerpt":" 빌드 및 배포, 운영할 수 있는 워크스페이스를 할당한다. 워크스페이스 별로 사용자, 클러스터, 라이브러리 등록이 가능하다.   a) 좌측 메인메뉴 → 워크스페이스                    서비스 설정       설명                       워크스페이스 명       워크스페이스 이름 (사용자지정)                 클러스터 수       워크스페이스에 할당된 클러스터 수                 구성원 수       워크스페이스를 사용하는 구성원 수                 시스템 명       시스템 명                 설명       워크스페이스 설명          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3/",
        "teaser":null},{
        "title": "2.3.1 워크스페이스 생성",
        "excerpt":"워크스페이스를 생성 하는 기능이다. 워크스페이스 별로 구성원 등록 및 클러스터, 레지스트리(저장소) 등록을 할 수 있다. a) 좌측 메인메뉴 → 워크스페이스 → 오른쪽 상단 워크스페이스 생성 버튼을 클릭한다. b) 서비스에 사용할 이름, 설명, 색상, 레지스트리 및 구성원, 클러스터 정보를 등록한다. c) 구성원, 클러스터 추가는 체크박스가 선택 된것만 반영이 된다. 클러스터 편집...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 워크스페이스 편집",
        "excerpt":" 워크스페이스 정보를 편집하는 기능이다. 워크스페이스 이름, 설명, 색상 변경이 가능하며 해당 서비스를 사용할 구성원 편집, 워크스페이스에 등록할 클러스터 편집이 가능하다.   a) 좌측 메인메뉴 → 워크스페이스 → 워크스페이스 액션 메뉴 → 워크스페이스 편집 → 수정완료 후 수정버튼을 클릭한다.     b) 워크스페이스 명, 설명, 색상 및 구성원, 클러스터 수정이 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 워크스페이스 삭제",
        "excerpt":" 워크스페이스를 삭제 하는 기능이다. 삭제 시, 워크스페이스에 클러스터가 등록되어 있을 경우 삭제가 불가능하며 워크스페이스 편집에서 클러스터를 제거 후 삭제를 진행할 수 있다.   a) 좌측 메인메뉴 → 워크스페이스 → 워크스페이스 액션 메뉴 → 워크스페이스 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.3/",
        "teaser":null},{
        "title": "2.4.仪表盘",
        "excerpt":"대시보드에서는 Cocktail Cloud에 서비스된 정보를 한 눈에 확인 할 수 있다. 요약정보 현재 등록 관리되고 있는 클러스터 개수, 워크스페이스 개수, 서비스 개수, 현재 발생한 알람의 개수를 볼 수 있다. 워크스페이스 현황 워크스페이스별로 클러스터, 서비스, 워크로드 개수를 확인할 수 있다. 클러스터 현황 등록된 클러스터 별로 서비스 개수, 워크로드 개수를 확인할 수...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.4/",
        "teaser":null},{
        "title": "3 사용자 관리",
        "excerpt":"현재 사용자 정보를 확인 및 관리 할 수 있다. a) 대시보드 -&gt; 페이지 왼쪽 하단 사용자 모양 버튼을 클릭 목록 설명 ID 현재 사용중인 계정의 ID를 확인할 수 있다. 사용자 언어 선택 Korean, Japanese, English, Chinese 중 언어를 선택할 수 있다. 사용자 타임존 선택 Seoul, Tokyo, NewYork, Shanghai 중 타임존을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3/",
        "teaser":null},{
        "title": "4.서비스",
        "excerpt":" 서비스 맵과 워크로드를 생성, 관리 하는 기능이다.                   목록       설명                              서비스 맵 그룹 액션메뉴                        서비스 맵 생성 팝업 호출          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4/",
        "teaser":null},{
        "title": "4.1 서비스 관리",
        "excerpt":" 서비스 맵과 해당 서비스 맵 그룹 및 워크로드를 관리한다.   ㅤㅤㅤㅤㅤ                  목록       설명                              논리적 단위로 구성된 그룹. 액션메뉴를 활성화하면 해당 그룹에 그룹명 변경, 위 or 아래 이동, 위 or 아래 그룹추가, 그룹 삭제가 가능. +서비스 맵 생성 버튼을 클릭하면 서비스 맵을 생성할 수 있음.          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1/",
        "teaser":null},{
        "title": "4.1.1 서비스 맵",
        "excerpt":"서비스 구성 단위이다. 논리적 단위로 그룹을 구성하고 그룹 내에 워크로드를 배치한다. 맵을 구성하고 있는 클러스터의 미터링 정보를 확인하거나, 워크로드의 모니터링 정보를 확인 할 수 있다. 배포 작업을 생성해서 워크로드를 생성하거나 업데이트 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택하여 클릭한다. 목록 설명 논리적 단위로 구성된 그룹....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.1/",
        "teaser":null},{
        "title": "4.1.1-1 서비스 맵 그룹관리",
        "excerpt":"서비스맵에 대하여 그룹으로 관리한다. 해당 그룹에 서비스맵을 생성할 수 있다. 그룹명, 그룹색상을 변경하거나, 그룹 추가, 이동, 삭제 가능하다. a) 좌측 메인메뉴 → 서비스 → 서비스맵 그룹의 ▼(액션 버튼) 클릭하여 메뉴를 활성화한다. 목록 설명 그룹명 변경 그룹명, 그룹색상을 변경 위로 이동 그룹을 위로 이동 아래로 이동 그룹을 아래로 이동 위에 그룹...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.1.1/",
        "teaser":null},{
        "title": "4.1.1-2 서비스 맵 생성",
        "excerpt":" 서비스에 새로운 서비스 맵을 생성 한다.   a) 좌측 메인메뉴 → 서비스 → 서비스의 우측 [+서비스 맵 생성] 버튼을 클릭한다.     b) 사용하고자 하는 클러스터를 선택하고, 맵 이름과 네임스페이스 이름을 지정하여 서비스 맵을 생성한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.1.2/",
        "teaser":null},{
        "title": "4.1.1-3 서비스 맵 이름변경",
        "excerpt":" 서비스 맵의 이름을 변경한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵의 우측 ✎ 버튼을 클릭한다.     b) 활성화된 이름 입력란에 내용을 변경 후, Enter 키를 눌러 서비스 맵의 이름을 변경한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.1.3/",
        "teaser":null},{
        "title": "4.1.1-4 서비스 맵 삭제",
        "excerpt":" 서비스 맵을 삭제하는 기능이다. 서비스 맵을 삭제하기 위해서는 배포 중인 워크로드가 없어야 한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 서비스 맵 삭제를 클릭한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.1.4/",
        "teaser":null},{
        "title": "4.1.2 그룹 관리",
        "excerpt":"워크로드에 대하여 그룹으로 관리한다. 해당 그룹에 워크로드를 생성할 수 있다. 그룹명을 변경하거나, 그룹 추가, 이동, 삭제, 컬럼수 변경이 가능하다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 워크로드 그룹의 ▼(액션 버튼) 클릭하여 메뉴를 활성화한다. 목록 설명 그룹명 변경 그룹명을 변경 컬럼수 변경 컬럼수를 변경(최소:1~최대:8) 왼쪽으로 이동 그룹을 왼쪽으로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1.2/",
        "teaser":null},{
        "title": "4.2 워크로드",
        "excerpt":" 서비스를 구성하는 최소 단위이다. 1개의 워크로드가 서비스가 될 수도 있고, 여러개의 워크로드가 하나의 서비스를 구성 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택하면 맵안에 구성된 워크로드들을 볼 수 있다.       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2/",
        "teaser":null},{
        "title": "4.2.1 워크로드 생성",
        "excerpt":"그룹관리에서 워크로드를 생성하고 실행한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 워크로드 그룹 + 버튼(워크로드 생성)을 클릭한다. 워크로드 유형을 선택 한다. b) 기본정보, 컨테이너, 인스턴스, 오토 스케일링, 업데이트 정책, 서비스 포트, 볼륨마운트, 볼륨 내용을 작성하고 생성버튼을 눌러 워크로드를 생성한다. 워크로드 기본 정보 정의 항목 설명 이름 생성하는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.1/",
        "teaser":null},{
        "title": "4.2.2 워크로드 편집",
        "excerpt":"Running 또는 Stopped 상태의 워크로드를 편집하고 재배포 한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 워크로드를 클릭한다. b) 기본정보, 컨테이너, 인스턴스, 업데이트 정책, 서비스 포트, 볼륨 내용을 편집하고 수정버튼을 눌러 워크로드를 재배포 한다. 워크로드 Running 중이라면 워크로드유형과 컨테이너의 이미지 변경이 불가능. 단, 컨테이너 이미지태그 변경은 가능. 이를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.2/",
        "teaser":null},{
        "title": "4.2.3 워크로드 인스턴스 정보 조회",
        "excerpt":"워크로드 인스턴스의 정보를 조회 할 수 있다. 인스턴스 정보 Instance 상세 정보, 상태 정보, 이벤트 정보, 배포 정보, 웹터미널(컨테이너), 로그(컨테이너) Services 상세 정보, 이벤트 정보, 배포 정보 Persistent Volume Claims 상세 정보, 볼륨 상세 정보, 배포 정보 Controller 상세 정보, 이벤트 정보, 배포 정보, 오토스케일러(Deployments만 해당) 정보(옵션) Ingresses 상세 정보,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.3/",
        "teaser":null},{
        "title": "4.2.4 워크로드 중지",
        "excerpt":" 배포된 워크로드를 중지한다. 워크로드를 중지하면 POD는 삭제된다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 중지를 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.4/",
        "teaser":null},{
        "title": "4.2.5 워크로드 시작",
        "excerpt":" 중지된 워크로드를 시작한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 시작을 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.5/",
        "teaser":null},{
        "title": "4.2.6 워크로드 재시작",
        "excerpt":" 워크로드를 재시작한다. 컴퓨터의 Rebooting과 같은 개념이다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 재시작을 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.6/",
        "teaser":null},{
        "title": "4.2.7 워크로드 제거",
        "excerpt":" 중지된 워크로드를 제거한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 제거를 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2.7/",
        "teaser":null},{
        "title": "4.3 모니터링",
        "excerpt":" 워크로드, POD, Container 별로 사용 중인 CPU, Memory, Network 사용량에 대하여 조회 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 모니터링을 클릭한다.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.3/",
        "teaser":null},{
        "title": "4.4 파이프라인",
        "excerpt":"파이프라인 기능을 통해 이미지 빌드 작업부터 워크로드 배포작업까지 한 번에 진행 할 수 있다. 또한 배포 중인 워크로드의 이미지 버전을 변경하여 재배포 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 파이프라인을 클릭한다. 파이프라인 메뉴 설명 일괄 실행 파이프라인 작업들을 일괄적으로 실행 실행 해당 파이프라인 작업을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.4/",
        "teaser":null},{
        "title": "4.5 스토리지 볼륨",
        "excerpt":"퍼시스턴트 볼륨 현황 및 생성,삭제를 제공한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 → 스토리지 볼륨 항목 설명 볼륨 이름 생성한 퍼시스턴트 볼륨 이름, 클릭 시 스토리지 볼륨 상세 화면으로 이동 볼륨 타입 볼륨 타입(Single, Shared) 상태 볼륨의 상태(Ready, Mounted) 사용량 사용량, 요청량, 총량 Age 볼륨 생성 경과 시간...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.5/",
        "teaser":null},{
        "title": "4.5.1 스토리지 볼륨 생성",
        "excerpt":"퍼시스턴트 볼륨 생성 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 → 스토리지 볼륨 항목 설명 스토리지 볼륨 타입 볼륨 타입(Single, Shared) 스토리지 클러스터에 등록된 스토리지 목록 노출 엑세스 모드 스토리지 볼륨 타입이 Single일 경우 ReadWriteOnce, Shard일 경우 ReadWriteMany, ReadOnlyMany를 선택 이름 생성할 스토리지 볼륨의 이름 용량...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.5.1/",
        "teaser":null},{
        "title": "4.5.2 스토리지 볼륨 삭제",
        "excerpt":" 퍼시스턴트 볼륨을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 → 스토리지 볼륨 → 스토리지 볼륨 액션메뉴(활성화) → 삭제 클릭    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.5.2/",
        "teaser":null},{
        "title": "4.6 설정 정보",
        "excerpt":" 어플리케이션 단위로 변수값을 key=value의 형태로 저장하여 볼륨처럼 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보를 클릭한다.                      메뉴       설명                       컨피그 맵       컨피그 맵을 등록, 편집, 삭제 관리 메뉴                 시크릿       시크릿을 등록, 편집, 삭제 관리 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6/",
        "teaser":null},{
        "title": "4.6.1 컨피그 맵",
        "excerpt":" 서버에서 Config File을 Map 형식으로 저장하여 볼륨으로 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 컨피그 맵을 클릭한다.                     항목       설명                              컨피그 맵 추가 페이지로 이동                 이름       컨피그 맵 이름(사용자 지정)                 설명       컨피그 맵 설명(사용자 지정)                        컨피그 맵의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.1/",
        "teaser":null},{
        "title": "4.6.1.1 컨피그 맵 추가",
        "excerpt":"서비스에 컨피그 맵을 추가한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 컨피그 맵을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.1.1/",
        "teaser":null},{
        "title": "4.6.1.2 컨피그 맵 수정",
        "excerpt":" 서비스에 추가 된 컨피그 맵의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 수정을 클릭     b) 데이터 값 변경 후, 수정 버튼을 클릭하여 컨피그 맵을 편집한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.1.2/",
        "teaser":null},{
        "title": "4.6.1.3 컨피그 맵 삭제",
        "excerpt":" 서비스에 컨피그 맵을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 삭제 클릭     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.1.3/",
        "teaser":null},{
        "title": "4.6.2 시크릿",
        "excerpt":" 서버에서 Secret File로 저장하여 환경변수 및 볼륨으로 사용 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 시크릿을 클릭한다.                     항목       설명                              시크릿 추가 페이지로 이동                 이름       시크릿 이름(사용자 지정)                 설명       시크릿 설명(사용자 지정)                        시크릿의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.2/",
        "teaser":null},{
        "title": "4.6.2.1 시크릿 추가",
        "excerpt":"서비스에 시크릿을 추가한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 시크릿 → 시크릿 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 시크릿을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명 시크릿의 설정의 설명 입력...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.2.1/",
        "teaser":null},{
        "title": "4.6.2.2 시크릿 수정",
        "excerpt":" 서비스에 추가 된 시크릿의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 수정을 클릭      b) 데이터 값 변경 후, 수정 버튼을 클릭하여 시크릿을 편집한다.(시크릿 값은 보안상 보여주지 않음)     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.2.2/",
        "teaser":null},{
        "title": "4.6.2.3 시크릿 삭제",
        "excerpt":" 서비스에 시크릿을 삭제한다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 설정 정보 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 삭제를 클릭     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.6.2.3/",
        "teaser":null},{
        "title": "4.7 서비스",
        "excerpt":" 생성된 워크로드에 Cluster Ip, Node Port, Loadbalancer 포트를 연결 하고, 인그레스 설정을 추가 할 수 있다.   a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 서비스를 클릭한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.7/",
        "teaser":null},{
        "title": "4.7.1 서비스 설정",
        "excerpt":"생성된 워크로드에 Cluster Ip, Node Port, Loadbalancer 포트를 연결한다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 서비스를 클릭한다. b) 화면 서비스 라인의 추가 버튼을 클릭한다. c) 서비스 유형과 포트를 연결할 워크로드를 지정한다. 서비스 포트 서비스 유형은 Cluster Ip, Node Port, Loadbalancer를 지정 할 수 있으며 Loadbalancer 타입일...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.7.1/",
        "teaser":null},{
        "title": "4.7.2 인그레스 설정",
        "excerpt":"생성된 서비스에 인그레스 설정을 추가 할 수 있다. a) 좌측 메인메뉴 → 서비스 → 서비스 맵 선택 → 서비스를 클릭한다. b) 화면 인그레스 라인의 추가 버튼을 클릭한다. 인그레스 인그레스 호스트 추가는 대상 호스트에서 기본호스트 또는 직접입력을 선택하여 추가 할 수 있다. 인그레스 TLS 추가는 시크릿 선택(설정 정보 시크릿을 tls 유형으로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.7.2/",
        "teaser":null},{
        "title": "5 빌드 관리",
        "excerpt":"도커(Docker) 이미지에 대한 빌드 작업을 관리한다. 어플리케이션을 다운로드, 소스 파일을 빌드, 이미지 파일을 생성하여 Harbor 레지스트리에 업로드한다. a) 좌측 메인 메뉴 → 빌드 를 클릭하여 해당 페이지로 이동한다. 목록 설명 빌드 생성 빌드 생성 버튼 Filter 검색을 통해 필요한 빌드 조회 빌드명 빌드의 이름 이미지명 저장된 도커 이미지 이름 작업...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5/",
        "teaser":null},{
        "title": "5.1 빌드 추가",
        "excerpt":"도커 이미지에 대한 빌드 작업을 추가한다. a) 좌측 메인 메뉴 → 빌드 화면에서 [빌드 생성] 버튼을 클릭하여 해당 페이지로 이동한다. b) 기본 정보를 입력한다. c) 빌드 작업을 추가하고 [생성] 버튼을 눌러 빌드를 생성하던지 [생성/실행] 버튼을 눌러 빌드 생성과 동시에 빌드를 실행한다. 빌드 기본 정보 기본 정보 설명 이름 생성할 빌드의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.1/",
        "teaser":null},{
        "title": "5.2 작업 설정 편집",
        "excerpt":" 빌드 작업을 편집한다.   a) 좌측 메인 메뉴 → 빌드 → 빌드 액션 메뉴(활성화) → [작업 설정 편집]을 선택하여 해당 페이지로 이동한다.   b) [편집] 버튼을 눌러서 기본 정보, 빌드 작업 내용을 수정하고 [수정] 버튼을 눌러 편집을 완료한다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.2/",
        "teaser":null},{
        "title": "5.3 히스토리",
        "excerpt":"해당 빌드의 히스토리 페이지로 이동하여 빌드 실행 항목에 대하여 히스토리 정보를 볼 수 있다. a) 좌측 메인 메뉴 → 빌드 화면에서 빌드 액션 메뉴(활성화) → [히스토리]를 클릭하여 해당 페이지로 이동한다. b) 액션 메뉴(활성화) → [로그보기]를 클릭하여 빌드 로그를 확인할 수 있다. c) 액션 메뉴(활성화) → [삭제]를 클릭하여 히스토리를 삭제할 수...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.3/",
        "teaser":null},{
        "title": "5.4 빌드 실행",
        "excerpt":"빌드 작업을 실행한다. 빌드 실행을 하면, 어플리케이션 다운로드, 어플리케이션 빌드, 이미지 빌드를 한 번에 실행한다. a) 빌드 목록에서 실행할 빌드 작업의 빌드 액션 메뉴(활성화) → [빌드 실행]을 선택하면 빌드실행 창이 활성화된다. b|) 설명을 입력 후, [승인] 버튼을 클릭하면 빌드 작업을 실행한다. c) 빌드 실행 시, 현재 액션이 변경되면서 빌드 로그...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.4/",
        "teaser":null},{
        "title": "5.5 빌드 취소",
        "excerpt":" 빌드 작업을 취소한다. 빌드작업이 실행 상태(RUNNING)인 것만 취소할 수 있다.   a) 빌드 목록에서 취소할 빌드 작업의 빌드 액션 메뉴(활성화) → [빌드 취소]를 선택하여 빌드 작업을 취소한다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.5/",
        "teaser":null},{
        "title": "5.6 로그 보기",
        "excerpt":" 빌드작업의 최근 실행 로그를 보여준다. 빌드실행 도중이라면 실행 중인 로그를 볼 수 있다.   a) 빌드 목록에서 로그 보기할 빌드 작업의 빌드 액션 메뉴(활성화) → [로그 보기]를 선택하여 해당 빌드 작업의 빌드 실행 로그를 볼 수 있다.        ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.6/",
        "teaser":null},{
        "title": "5.7 작업 삭제",
        "excerpt":" 빌드 작업을 삭제한다.   a) 빌드 목록에서 삭제할 빌드 작업의 빌드 액션 메뉴(활성화) → [작업 삭제]를 선택하여 해당 빌드 작업을 삭제할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.7/",
        "teaser":null},{
        "title": "6.카탈로그",
        "excerpt":"서비스 구성을 템플릿화하여 쉽게 워크로드 생성 및 배포, 관리가 가능한 기능이다. 여러 워크로드들을 한 번에 묶어 사용하고자 하는 경우 카탈로그 기능을 사용한다. 카탈로그는 마이 카탈로그와 칵테일 카탈로그로 구분된다. 카탈로그 메뉴 설명 마이 카탈로그 사용자가 생성한 카탈로그 칵테일 카탈로그 Cocktail Cloud 기본 제공 공식 카탈로그 Filter Catalog 검색을 통해 필요한 템플릿...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6/",
        "teaser":null},{
        "title": "6.1 카탈로그 저장",
        "excerpt":"카탈로그를 생성하여 필요한 서버들을 묶어 한 번에 배포 할 수 있다. 워크로드 컨테이너 이미지가 빌드 인 경우에는 이미지만을 저장하여 공용이미지로 변환하여 카탈로그로 저장한다. 저장된 카탈로그는 서비스 카탈로그에서 확인 할 수 있다. 카탈로그 저장시 설정의 컨피그 맵, 시크릿도 템플릿으로 저장한다. (단, 시크릿은 보안상 값은 저장하지 않는다.) a) 서비스에서 카탈로그로 저장하는 서비스...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.1/",
        "teaser":null},{
        "title": "6.2 目录部署",
        "excerpt":" 可以部署已创建目录。必要时，可以排除或编辑、部署不需要的实例。   a) 点击目录→需要部署模板的”部署”按钮。     b) 在模板目录页面，选择服务、集群、应用程序表后, 再点击”部署”。除了不需要的实例， 均可以部署。           部署新的应用程序表时，选择服务和集群，撰写应用程序表、命名空间名称后，可进行部 署。             部署现有应用程序表时，选择服务、应用程序表后，可进行部署。        c) 为了安全考虑 Secret 值不保存，应在部署前输入值。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.2/",
        "teaser":null},{
        "title": "6.3 目录编辑",
        "excerpt":" 可编辑已创建目录内容。可修改模板的版本、摘要信息和编辑内容，同时可以修改各种实例的部署信息。   a) 点击目录→需要编辑模板的”编辑”按钮。     b) 更改需要修改的模板的版本、摘要信息、编辑内容, 再点击页面右下角的”编辑”按钮， 可修改实例的部署信息。     c) 编辑页面上只能查看配置图和 Secret 的内容, 不能编辑。     d) 编辑服务器时, 只能查看容器的环境设置, 卷和挂载卷的内容, 不能编辑。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.3/",
        "teaser":null},{
        "title": "6.4 目录删除",
        "excerpt":" 可删除不必要的目录。(Platform 目录不能删除)   a) 点击目录→需要删除模板的”编辑”按钮。     b) 选择需要删除模板的版本后, 点击”删除”按钮, 删除该模板的版本。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.4/",
        "teaser":null},{
        "title": "6.5 目录出口",
        "excerpt":" 존재하는 카탈로그를 내보내기할 수 있다. (플랫폼 카탈로그는 내보내기 불가)   a) 카탈로그 → 내보내기 하고자 하는 템플릿 ‘편집’ 버튼을 클릭     b) 화면 왼쪽 상단의 ‘내보내기’ 버튼을 클릭 한다. 해당 카탈로그가 카탈로그명-버전.zip 로 다운로드 된다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.5/",
        "teaser":null},{
        "title": "6.6 目录进口",
        "excerpt":" 내보내기된 카탈로그 파일과 가져오기 기능을 통해 카탈로그를 생성할 수 있다. (플랫폼 카탈로그는 가져오기 불가)   a) 카탈로그 → ‘가져오기’ 버튼을 클릭     b) ‘Choose File’ 버튼을 클릭해 가져오기 할 카탈로그 압축파일을 선택한 후 ‘저장’ 버튼을 누른다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.6/",
        "teaser":null},{
        "title": "7.클러스터",
        "excerpt":" 클러스터의 상태와 리소스, 서비스, 알람이 제공된다.                   클러스터 메뉴       설명                       리소스       노드풀, 스토리지, 게이트웨이의 정보 서비스                 서비스       전체 서비스의 CPU, Memory, Network 사용량 및 개별 서비스의 모니터링 서비스                 알람       클러스터의 이벤트 정보 관련 알람 서비스          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7/",
        "teaser":null},{
        "title": "7.1 클러스터 목록",
        "excerpt":"시스템관리자에 의해 등록된 Kubernetes 클러스터 목록 정보를 조회 하는 기능이다. a) 클러스터 → 정렬 버튼을 클릭하여 원하는 정렬기준을 선택한다. 클러스터 설정 설명 클러스터 클러스터 종류 상태 클러스터 상태 서비스 클러스터에 등록된 서비스 맵의 수 클러스터의 Request CPU 클러스터의 Request Memory 클러스터의 Request Volume 클러스터에서 게이트웨이 수(Ingress, Node Port, Loadbalancer의 합)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.1/",
        "teaser":null},{
        "title": "7.2 리소스",
        "excerpt":" 노드풀, 스토리지, 게이트웨이 리소스 상태의 정보를 종합적으로 확인 가능하다.   a) 클러스터 → 클러스터 선택 → 리소스를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.2/",
        "teaser":null},{
        "title": "7.3 서비스",
        "excerpt":" 전체 서비스의 총 CPU, Memory, Network 사용량과 개별 서비스의 네임스페이스, 인스턴스 현황 등을 조회 할 수 있는 화면이다. 서비스 명을 클릭하면 해당 서비스 맵 페이지로 이동할 수 있다.   a) 클러스터 → 클러스터 선택 → 서비스을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.3/",
        "teaser":null},{
        "title": "7.4 알람",
        "excerpt":" 클러스터에 대한 이벤트를 알람으로 받을 수 있다.   a) 클러스터 → 클러스터 선택 → 알람을 클릭한다.     b) 알람 명 클릭 시 상세 내용을 확인 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.4/",
        "teaser":null},{
        "title": "7.4.1 알람 목록",
        "excerpt":"알람은 다음 목록에서 발생 조건이 지속 시간 만큼 계속될 경우 발생한다. AlertManager 알람 ID ALM-001 중요도 warning 알람 이름 AlertmanagerDown 지속 시간 5분 발생 조건 Alertmanager 메트릭 수집이 안 될 경우 발생 조치 사항 Prometheus의 로그 및 Alertmanager의 로그와 이벤트를 확인한다. 필요할 경우, Pod를 재시작한다. 알람 ID ALM-002 중요도 warning...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.4.1/",
        "teaser":null},{
        "title": "8.시스템 운영",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8/",
        "teaser":null},{
        "title": "Kubernetes as a service(Kaas) 클러스터 구성",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1/",
        "teaser":null},{
        "title": "GKE 클러스터 만들기",
        "excerpt":"GKE 클러스터를 배포하는 방법을 알아봅니다. Google Kubernetes Engine(GKE)에 로그인 https://cloud.google.com/kubernetes-engine/ 에서 Google cloud에 로그인합니다. 서비스 계정 만들기 1. IAM 및 관리자에서 Service Account 만들기. 서비스 계정에는 다음 역할이 필요합니다. project/viewer kubernetes-engine/admin service-account/user 역할 기반 액세스 제어(Identity and Access Management)를 사용하기 위한 필요 조건: rbac 생성시 사전 필수 요소 필요. 다음...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.1/",
        "teaser":null},{
        "title": "AKS 클러스터 만들기",
        "excerpt":"AKS 클러스터를 배포하는 방법을 알아봅니다. Azure Portal + Azure Cli를 사용하여 AKS(Azure Kubernetes Service) 클러스터 배포 사용자 인증을(OAuth) 위해 Azure AD(Active Directory)를 사용하도록 AKS(Azure Kubernetes Service)를 구성해야 합니다. 참조 : Azure Kubernetes Service와 Azure Active Directory 통합 설치 Azure에 로그인 https://portal.azure.com 에서 Azure Portal에 로그인합니다. 사전준비 Azure Active Drectory가 준비되어...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.2/",
        "teaser":null},{
        "title": "EKS 클러스터 만들기",
        "excerpt":"8.1.5 EKS 클러스터 만들기 Quick Start 8.1.5 EKS 클러스터 만들기 NAT Gateway 사용 EKS 클러스터를 배포하는 방법. Kubernetes 용 Amazon Elastic Container Service (Amazon EKS)를 사용하면 AWS의 Kubernetes를 사용하여 컨테이너 화 된 응용 프로그램을 쉽게 배포, 관리 및 확장 할 수 있다. 참조 : Amazon Elastic Container Service for Kubernetes(EKS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.3/",
        "teaser":null},{
        "title": "EKS 클러스터 정책 / 권한",
        "excerpt":"EKS 관리 역할(EKS 생성시 필요한 역할) 만들기. IAM(Identity and Access Management) 에서 역할(Roles)을 선택합니다. Roles 화면에서 [Create role]를 선택합니다. Create role 화면의 Select type of trusted entity 섹션에서 : AWS service 선택한다. Create role 화면의 Choose the service that will use this role 섹션에서 : EKS 선택한다. Create role 화면의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.4/",
        "teaser":null},{
        "title": "EKS 클러스터 만들기 Quick Start",
        "excerpt":"1. 필수 Role(역할) / Policy(정책) 만들기 a. EKS 관리 역할 만들기. b. IAM(services) &gt; Roles &gt; Create role 화면에서 i. EKS 선택 : AmazonEKSClusterPolicy , AmazonEKSServicePolicy (default로 구성되어 있다) ii. Next: Permissions &gt; Next: Tags &gt; Next: Revies iii. Review 화면에서 1) Role name : EKSClusterRole 2) Create role 클릭...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.5/",
        "teaser":null},{
        "title": "EKS NAT Gateway 사용",
        "excerpt":"EKS NAT Gateway 구성도 Name 규칙 zone 으로 구분 되는 경우 zone 명칭을 사용 한다. EKS Cluster name : cocktail-eks-cluster (중복 될수 없다.) VPC name : eks-cluster-vpc Subnets name : - availability zone A : Public subnet-&lt;A zone&gt;-nat1 , Private subnet-&lt;A zone&gt;-nat1 - availability zone B : Public subnet-&lt;B zone&gt;-nat2...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.6/",
        "teaser":null},{
        "title": "AZURE FILE 공유 만들기",
        "excerpt":"AZURE Storage Accounts Storage Accountss는 Azure File 공유 또는 Blob나 Queue와 같은 다른 저장소 리소스를 배포할 수 있는 저장소의 공유 풀입니다. 저장소 계정에 포함될 수 있는 공유 수에는 제한이 없습니다. 공유에 저장할 수 있는 파일 수에는 제한이 없으며, 저장소 계정의 최대 용량까지 저장할 수 있습니다. 1. 왼쪽 메뉴 또는 Home...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.1.7/",
        "teaser":null},{
        "title": "클러스터 직접 구성 WITH CUBE",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2/",
        "teaser":null},{
        "title": "Onpremise에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.1/",
        "teaser":null},{
        "title": "AWS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.2/",
        "teaser":null},{
        "title": "Azure에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Files Service가 준비되어...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.3/",
        "teaser":null},{
        "title": "GCP에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.4/",
        "teaser":null},{
        "title": "Aliyun에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 설치 1. 설치를 위해 빈...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.5/",
        "teaser":null},{
        "title": "AKS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Azure Storage Account(Azure File)가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.6/",
        "teaser":null},{
        "title": "EKS에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) Amazon Elastic File System(EFS)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.7/",
        "teaser":null},{
        "title": "GKE에 설치",
        "excerpt":"사전준비 설치 전 인스턴스 및 아래와 같은 프로그램들이 미리 설치 되어 있어야 하며 설치 되어 있지 않을 경우 에러 메시지가 발생한다. 1) 제공받은 cube 바이너리를 어느 디렉토리에서든 사용할 수 있도록 환경변수 path 설정을 한다. 2) Docker 다운로드 후 설치 : Get Docker CE for CentOS 3) GKE 서비스 계정 키가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.8/",
        "teaser":null},{
        "title": "CUBE 클러스터 타입",
        "excerpt":"클러스터의 사용 규모와 HA 구성 여부에 따라 타입을 구분 Large(HA) : 워커 노드 250대 이상, External ETCD 클러스터 구성, Shared Storage 이중화 옵션 Medium(HA) : 워커 노드 10 ~ 250대 규모, Stacked ETCD 구성, Shared Storage 이중화 옵션 Small : 워커노드 10대 미만 규모, 단일 마스터(백업 구성), Shared Storage 이중화...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.2.9/",
        "teaser":null},{
        "title": "Cube CLI",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3/",
        "teaser":null},{
        "title": "`init` command",
        "excerpt":"init는 Cocktail Cluster를 설치하려는 플랫폼에 맞는 cube.toml 을 다운로드한다. Usage cube init [flags] Flags [ provider ] provider (필수) --provider, -p Cocktail Cluster를 설치할 플랫폼의 이름을 지정한다. 현재 버전에서 지원하는 provider 목록은 아래와 같다   flag 값 Provider onpremise On-premise aws Amazon Web Service azure Microsoft Azure gcp Google Compute...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.1/",
        "teaser":null},{
        "title": " `cluster get-config` command",
        "excerpt":"cluster get-config는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster의 설치 정보 파일을 다운로드한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.10/",
        "teaser":null},{
        "title": "`cluster delete` command",
        "excerpt":"cluster delete는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 삭제한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할 수 있다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.11/",
        "teaser":null},{
        "title": "`cluster set-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 설치 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.12/",
        "teaser":null},{
        "title": "`cluster del-addon` command",
        "excerpt":"cluster set-addon은 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster monitoring-agent를 삭제 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Cocktail Cluster list 명령으로 클러스터 아이디를 확인 할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.13/",
        "teaser":null},{
        "title": "`destroy` command",
        "excerpt":" destroy는 서버 인스턴스에서 Cocktail Cluster를 제거 한다.     Prerequisite  Cocktail Cluster 설치 상태.create command   Usage      cube destory  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.14/",
        "teaser":null},{
        "title": "`create` command",
        "excerpt":"create는 Cocktail Cluster를 init으로 준비한 플랫폼에 설치한다. Prerequisite init command Usage cube create Cocktail Cluster를 설치한다. Flags [ target ] Cocktail Cluster를 설치할때 상세정보를 tail -f log/cube.log로 확인할 수 있습니다. target (선택) [ registry | storage | cocktail | addon ] --target 설치 module을 지정 할 수 있다. Cocktail module을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.2/",
        "teaser":null},{
        "title": "`status` command",
        "excerpt":" status는 Cocktail Cluster의 현재 상태를 출력한다.     Usage   cube status   Output      etcd 상태   node 상태   Kubernetes pod 상태   cocktail system pod 상태   cocktail addon pod 상태   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.3/",
        "teaser":null},{
        "title": "`login` command",
        "excerpt":"login는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online에 로그인 한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Usage cube login [flags] Flags [ url | id | password | system ] url (필수) --url, -u 접속할 Cocktail DashBoard의 Url을 입력 한다. id (필수) --id, -i ID 정보를 입력 한다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.4/",
        "teaser":null},{
        "title": "`logout` command",
        "excerpt":" logout는 설치된 Cluster의 Cocktail DashBoard 또는 Cocktail Online 서비스에서 로그아웃 한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      cube logout   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.5/",
        "teaser":null},{
        "title": "`cluster register` command",
        "excerpt":" cluster register는 설치된 Cocktail Cluster를 Cocktail DashBoard 또는 Cocktail Online에 등록 할 때 사용한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster register  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.6/",
        "teaser":null},{
        "title": "`cluster list` command",
        "excerpt":" cluster list는 Cocktail DashBoard 또는 Cocktail Online에 등록된 Cocktail Cluster를 정보를 표시한다.     Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command    Usage      Cocktail Cluster list  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.7/",
        "teaser":null},{
        "title": "`cluster resize` command",
        "excerpt":" cluster resize는 노드의 개수를 늘리거나 줄일 때 사용한다.    Prerequisite  Cocktail Cluster 설치 상태여야 한다.  create command   Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다.  login command   Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다.  register command    Usage   vi cube.toml  [[node-pool.nodes]] ip 항목을 수정 합니다.      Cocktail Cluster resize  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.8/",
        "teaser":null},{
        "title": "`cluster upgrade` command",
        "excerpt":"cluster upgrade는 설치된 Cocktail Cluster를 upgrade한다. 현재 지원가능한 버전은 1.13.1 버전에서 1.13.2, 1.13.3, 1.13.5 버전으로의 **upgrade를 지원한다. Prerequisite Cocktail Cluster 설치 상태여야 한다. create command Cocktail DashBoard 또는 Cocktail Online에 로그인된 상태여야 한다. login command Cocktail DashBoard 또는 Cocktail Online에 Cluster가 등록된 상태여야 한다. register command Usage vi cube.toml [cube]...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.3.9/",
        "teaser":null},{
        "title": "8.4 클러스터 운영",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4/",
        "teaser":null},{
        "title": "Cube cluster startup & shutdown",
        "excerpt":"Cube cluster의 startup과 shutdown은 일련의 순서대로 진행해야 한다. Startup Startup시에는 master node를 먼저 기동하고 worker node를 기동하는 순서로 진행한다. 1) Master Node # systemctl start etcd # systemctl start docker # systemctl start kubelet 2) Worker Node # systemctl start docker # systemctl start kubelet Shutdown Shutdown시에는 startup시와는 반대로 worker...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.1/",
        "teaser":null},{
        "title": "8.4.10 Alarm Message 슬랙 / Email 연결",
        "excerpt":"Alarm Message 앱을 생성한 채널에 연결 채널을 생성 합니다. (name : cube-alarm) 아래 URL로 제공 되는 앱의 Incoming Webhook(Send data into Slack in real-time)을 생성 합니다. https://slack.com/apps/A0F7XDUAZ-incoming-webhooks (로그인 필요) Add Configuration 버튼을 클릭 합니다. 메세지를 출력할 채널을 선택 또는 생성 합니다. Add Incomming WebHooks integration 버튼을 클릭하면 다음화면에서 Webhook URL을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.10/",
        "teaser":null},{
        "title": "Update cube cluster certificate",
        "excerpt":"Kubernetes를 구성하는 각 컴포넌트들도 내부 인증서를 통해 통신한다. 필요에 의해 이 인증서를 update해야 하는 경우 아래의 절차대로 수행한다. 1.먼저 각 master node와 worker node의 기존 인증서를 삭제한다. # ssh to master node # rm -rf /opt/kubernetes/pki # rm -rf /etc/kubernetes/pki 2.인증서를 재 생성한다. 이전에 설치를 진행한 디렉토리에서 cert.yaml을 실행하여 인증서를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.2/",
        "teaser":null},{
        "title": "Add etcd member to existing etcd cluster",
        "excerpt":"Etcd cluster가 가동중인 상태에서 etcd member를 추가하는 방법에 대해 기술한다. etcd 인증서 디렉토리: /etc/kubernets/pki/etcd etcd 설정파일: /etc/etcd/etcd.conf 1.etcd ca 파일을 기반으로 추가하고자 하는 etcd node에서 etcd 인증서를 생성한다. # cube.toml에 추가할 etcd node 정보를 기입한다. etcd cluster는 반드시 홀수개의 node로 구성되어야 하며, 최대 5개로 구성하는 것을 권고한다. $ vi cube.toml...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.3/",
        "teaser":null},{
        "title": "Cube cluster backup & restore",
        "excerpt":"Cube cluster가 어떤 이유로 인해 재설치할 경우를 대비하여 kubernetes workload의 데이터베이스 역할을 수행하는 etcd 데이터의 백업은 반드시 주기적으로 수행되어야 한다. 또한, 칵테일이 설치되어 있는 경우에는 칵테일 데이터베이스도 주기적으로 백업하여 cluster장애로 인한 재설치시에 사용하도록 한다. etcd 인증서는 반드시 기존 설치시에 사용된 인증서를 사용해야 하며, 그렇지 않을 경우 복원할 수 없다. etcd...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.4/",
        "teaser":null},{
        "title": "Docker container disk 관리",
        "excerpt":"Container 내에서 stdout, stderr로 출력을 보내면 docker overlay storage driver를 사용하는 경우 $DOCKERROOT/containers/{containerid}/containerid-json.log 파일에 저장되며 별다른 조치를 하지 않을 경우 계속 증가하게 된다. 이를 방지하기 위해 아래와 해당 디렉토리에 logrotation 설정파일을 추가한다. 아래 /data/docker 디렉토리가 $DOCKER_ROOT임. 1./etc/logrotate.d/docker-container # Added by cube /data/docker/containers/*/*.log { daily rotate 4 compress size=10M missingok delaycompress...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.5/",
        "teaser":null},{
        "title": "칵테일 암호 관리",
        "excerpt":"1.칵테일 로그인 암호 관리. 1) 칵테일 암호 관리 대상은 칵테일이 설치된 모든 cluster를 대상으로 한다. 2) 암호는 “영문대소문자 + 특수기호(!@#$%^&amp;*=+-_) + 숫자” 조합으로 최소 8자 이상 최대 24자리까지 생성 가능하다. 3) 암호 변경 주기는 90일이며, 90일이 지나서 칵테일에 로그인할 경우 암호 변경 화면이 표시된다. 암호 변경화면에서 “다음에 변경하기”를 선택하면 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.6/",
        "teaser":null},{
        "title": "캐시 메모리 증가에 따른 클러스터 노드 메모리 최적화 방법",
        "excerpt":" 클러스터를 구성하는 각 node는 cache memory가 점차적으로 증가하게 되어 있다.   주기적으로 각 node에서 아래 명령을 수행함으로써 cache memory를 초기화 할 수 있다.   # sync; echo 3 &gt; /proc/sys/vm/drop_caches 또는 # sync; sysctl -w vm.drop_caches=3   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.7/",
        "teaser":null},{
        "title": "칵테일 클라우드에서 스토리지 볼륨 스케일업 방법",
        "excerpt":"워크로드가 스토리지 볼륨(Persistent Volume)을 사용 중, 용량이 부족 할 경우 스토리지의 용량을 확장 할 경우가 있다. 이 경우 칵테일에서는 아래와 같이 조치하면 된다. 쿠버네티스에서는 몇몇 클라우드 프로바이더의 스토리지 클래스를 통해 PVC의 요청량을 늘리면 PV 및 해 당 스토리지의 용량이 자동 확장 된다. 이 때 PV는 Capacity 량이 조정 되며, 연결된...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.8/",
        "teaser":null},{
        "title": "AWS Billing Report 생성",
        "excerpt":"AWS 청구 및 비용 관리는 AWS 사용에 대한 청구 보고서 세트를 제공한다. 이 보고서에는 사용한 AWS 서비스, 사용 시간, 전송 한 데이터의 양, 사용한 평균 저장 공간 등이 표시됩니다. 사전준비 AWS Management Console에 루트 사용자로 로그인 해야 한다. AWS Cost and Usage report 생성 1. 루트 사용자로 Sign in to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.4.9/",
        "teaser":null},{
        "title": "Troubleshooting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5/",
        "teaser":null},{
        "title": "k8s cluster의 health check",
        "excerpt":"Cube로 설치한 장비에서 Kubernetes와 칵테일의 주요 구성 요소에 대해 상태 체크를 하기 위한 방법은 아래와 같다. 이는 cube로 설치후 k8s 주요 구성 요소의 정상 동작 여부를 확인하는데 사용할 수 있다. cube status 명령을 통한 etcd, k8s pod, monitoring pod, 칵테일 pod 상태를 체크할 수 있다. etcd daemon은 kubernetes에서 생성되는 각종...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5.1/",
        "teaser":null},{
        "title": "사용자의 micro service가 서로 연결이 안될때.",
        "excerpt":"일반적으로 k8s에서 각 Container들은 연관된 Container와 통신하기 이해 Kubernetes DNS를 사용한다. 즉 POD는 생성과 삭제가 일어나면 POD가 가지고 있던 내부 cluster ip는 변동되게 됨으로 일반적으로 micro service들을 k8s dns를 통해 필요한 container를 찾는다. 먼저 k8s의 DNS 서비스가 정상 동작 중인지 확인하는 방법은 busybox를 생성하고 컨테이너에 접속해서 nslookup명령으로 k8s의 DNS에 접속되는지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5.2/",
        "teaser":null},{
        "title": "NFS 서버의 접속 확인 방법.",
        "excerpt":"칵테일 서비스는 기본적으로 Storage class를 이용하여 persistence volume을 사용한다. local 및 baremetal 환경에서는 NFS 서버를 구축하여 Storage class로 활용하며 public cloud에서는 해당 서비스 제공자가 기본적으로 제공해 주는 storage class를 사용하게 된다. 본 문서는 local 및 Baremetal 환경에서 NFS 서버의 상태 및 칵테일 service와의 연결이 정상적인지 확인하는 방법을 기술한다. NFS 서버의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5.3/",
        "teaser":null},{
        "title": "Cube로 설치한 node의 ip 정보가 변경될 경우.",
        "excerpt":" cube로 설치한 master node, worker node에서 ip 정보가 변경되면 현재로서는 cube를 이용하여 재설치하는 방식을 권장한다.   이는 k8s의 component중 api server, scheduler, control manager가 ip 인증서 기반으로 통신하며, etcd의 flannel subnetwork정보도 ip정보가 저장되기 때문이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5.4/",
        "teaser":null},{
        "title": "Centos yum 자동 upgrade 방지",
        "excerpt":"칵테일은 kubernetes package의 버전에 따라 설정파일의 차이가 있으므로, 시스템에서 yum upgrade가 자동으로 설정되어 있으면 시스템 업그레이드시에 칵테일 관련 설정이 override 될 수 있으므로 반드시 security 부분만 자동으로 업그레이드가 되도록 수정해야 한다. 만약 그렇지 않으면, 시스템의 재기동이 필요한 업그레이드나 칵테일 관련 설정파일이 override 되면서 서비스가 중단될 수 있다. yum-cron 설정 파일...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8.5.5/",
        "teaser":null},{
        "title": "9.구성원",
        "excerpt":" 현재 워크스페이스에 속한 구성원들 정보를 보여준다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/9/",
        "teaser":null},]
