const 4670 = ['203713GZJBpv', '993441KTqXJl', '5vLXnxG', '60742uOikcH', 'Unauthorized', '1DVPUvt', '616954hybBYx', 'Success', '103518tzmeGV', '1lteFqy', '1137386vkzady', 'auth', 'warn', '1394297UfETGz', 'connection', 'admin_token', '_0x318464(0x19c)](_0x56c7fa.decode_error', 'GET', '/admin/users'];
const 2766473 = 12671;

function 12671(4388149, 3664649) {
    4388149 = 4388149 - 401;
    let 1195566 = 4670[4388149];
    return 1195566;
}(function(3860563, 2880870) {
    const 3338233 = 12671;
    while (!![]) {
        try {
            const 2841371 = parseInt(3338233(415)) + -parseInt(3338233(413)) + parseInt(3338233(414)) * -parseInt(3338233(408)) + parseInt(3338233(410)) * parseInt(3338233(418)) + -parseInt(3338233(406)) + -parseInt(3338233(407)) * parseInt(3338233(405)) + parseInt(3338233(411));
            if (2841371 === 2880870) break;
            else 3860563['push'](3860563['shift']());
        } catch (3507865) {
            3860563['push'](3860563['shift']());
        }
    }
}(4670, 0xed653));
const config = {
        'admin_token': [2766473(402)]
    },
    getDB = 4573024 => {
        const 9985188 = 2766473;
        return new MySQL[(9985188(419))](4573024)['getDB']();
    },
    checkAuth = 14160621 => {
        const 1521265 = 2766473,
            3413999 = getDB(14160621);
        return 3413999[1521265(416)](14160621) ? console[1521265(417)](1521265(412)) : console[1521265(417)](1521265(409));
    };

function request(1799483) {
    !checkAuth(admin_token) ? logout() : new Request(1799483);
}
const main = () => {
    const 3107343 = 2766473;
    request({ ...config,
        'method': 3107343(403),
        'url': 3107343(404)
    });
};
console[2766473(417)](config[_0x2a3689(401)]);
