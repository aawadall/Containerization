gcloud beta container \
	--project "cashman" \
	clusters create "development-cluster" \
	--zone "us-central1-a" \
	--no-enable-basic-auth \
	--cluster-version "1.12.8-gke.10" \
	--machine-type "n1-standard-1" \
	--image-type "COS" \
	--disk-type "pd-standard" \
	--disk-size "30" \
	--metadata disable-legacy-endpoints=true \
	--scopes "https://www.googleapis.com/auth/devstorage.read_only",\
		"https://www.googleapis.com/auth/logging.write",\
		"https://www.googleapis.com/auth/monitoring",\
		"https://www.googleapis.com/auth/servicecontrol",\
		"https://www.googleapis.com/auth/service.management.readonly",\
		"https://www.googleapis.com/auth/trace.append" \
	--num-nodes "3" \
	--enable-cloud-logging \
	--enable-cloud-monitoring \
	--enable-ip-alias \
	--network "projects/cashman/global/networks/default" \
	--subnetwork "projects/cashman/regions/us-central1/subnetworks/default" \
	--default-max-pods-per-node "110" \
	--addons HorizontalPodAutoscaling,HttpLoadBalancing \
	--enable-autoupgrade \
	--enable-autorepair
