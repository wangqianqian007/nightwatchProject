module.exports = {

  src_folders: ["tests"],
  output_folder: "reports",
  page_objects_path: [],

  selenium: {
    start_process: true,
    server_path: "node_modules/webdriver-manager/selenium/selenium-server-standalone-2.52.0.jar",
    log_path: false,
    cli_args: {
      'webdriver.chrome.driver': "node_modules/webdriver-manager/selenium/chromedriver"
    }
  },


  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: false,
        path: ""
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}