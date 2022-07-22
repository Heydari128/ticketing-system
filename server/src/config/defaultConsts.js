exports.ROLES = ['admin', 'user', 'operator', 'superadmin']
exports.DEFAULT_ROLE = 'user'
exports.DEFAULT_USER_SETTINGS = {
    darkMode: false,
    wallpaper: '',
    primaryColor: '#0359bb'
}
exports.TICKET_STATUSES = {
    open: {
        action: 'open',
        title: 'Open'
    },
    on_hold: {
        action: 'open',
        title: 'On Hold'
    },
    answered: {
        action: 'closed',
        title: 'Was Answered'
    },
    closed: {
        action: 'closed',
        title: 'Closed'
    }
}
exports.DEFAULT_TICKET_STATUS = 'open'
