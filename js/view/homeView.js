view.homeScreen = function() {
    view.nav();
    controller.prepareData()
    view.setHTML('app', components.home);
}   