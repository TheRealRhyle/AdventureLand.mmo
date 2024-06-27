game_log("Healer functions loaded.");

function heal_or_med() {
    if (!is_on_cooldown('use_hp')) {
        switch (true) {
            case (character.max_hp - character.hp) > 400:
                heal(1);
            case (character.max_hp - character.hp) > 200 && (character.max_hp - character.hp) < 399:
                heal(0);
        }
    } else {
        game_log("currently on cooldown.");
    }

}

function heal(hpot_size) {
    switch (hpot_size) {
        case 0:
            if (locate_item('hpot0') != -1) {
                consume(locate_item('hpot0'));
                break;
            } else {
                use_skill('use_hp');
                break;
            }
        case 1:
            if (locate_item('hpot1') != -1) {
                consume(locate_item('hpot1'));
                break;
            } else if (locate_item('hpot0') != -1) {
                consume(locate_item('hpot0'));
                break;
            } else {
                use_skill('use_hp');
                break;
            }
    }
}
