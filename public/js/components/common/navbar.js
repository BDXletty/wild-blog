let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', 'moment', function (UsersService, $state, angularMoment, moment) {
        'use strict'

        this.message = {
            text: 'hello world!',
            time: new Date()
        };

        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })

    }]
}

export default navbar
