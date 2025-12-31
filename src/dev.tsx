import webphone from "@/index.tsx";

await webphone.render({
  statusBar: {
    showNotificationsIcon: true,
    showSettingsIcon: true,
  },
  settingsMenu: {
    deviceMenu: {
      showAddDevices: true,
      showEnableDevicesButton: true,
      showRemoveDevicesButton: true,
    },
  },
});
