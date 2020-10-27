const defaultHP = 100;
const playerHitPower = 10;
const playerStrongHitPower = 20;
const monsterHitPower = 30;
const healPoint = 10;

let bonusLife = 1;
let maxHP = Number(prompt('Enter max HP'));
let log = [];
let gamesLog = [];

if (!maxHP) {
    maxHP = defaultHP;
}

adjustHealthBars(maxHP);
log.push(['Monster HP: ' + monsterHealthBar.value, 'Player HP: ' + playerHealthBar.value]);

function attackButton() {
    let playerAttack = applyMonsterDamage(playerHitPower);
    let monsterAttack = applyPlayerDamage(monsterHitPower);

    log.push(['Player attack - ' + playerAttack, 'Monster attack - ' + monsterAttack]);
    log.push(['Monster HP: ' + monsterHealthBar.value, 'Player HP: ' + playerHealthBar.value]);

    checkWinner();
}

function strongAttackButton() {
    let playerStrongAttack = applyMonsterDamage(playerStrongHitPower);
    let monsterAttack = applyPlayerDamage(monsterHitPower);

    log.push(['Player strong attack - ' + playerStrongAttack, 'Monster attack - ' + monsterAttack]);
    log.push(['Monster HP: ' + monsterHealthBar.value, 'Player HP: ' + playerHealthBar.value]);

    checkWinner();
}

function playerHeal() {
    increasePlayerHealth(healPoint);
    let monsterAttack = applyPlayerDamage(monsterHitPower);

    log.push(['Player heals + ' + healPoint, 'Monster attack - ' + monsterAttack]);
    log.push(['Monster HP: ' + monsterHealthBar.value, 'Player HP: ' + playerHealthBar.value]);
}

function showLog() {
    console.log(log);
}

function reset() {
    gamesLog.push([log]);
    console.log(gamesLog);
    log = [];
    resetGame(maxHP);
    maxHP = Number(prompt('Enter max HP'));
    if (bonusLife < 1) {
        bonusLife = 1;
        bonusLifeEl.hidden = false;
    }
    adjustHealthBars(maxHP);
    log.push(['Monster HP: ' + monsterHealthBar.value, 'Player HP: ' + playerHealthBar.value]);
}

function checkWinner() {
    if (playerHealthBar.value <= 0 && monsterHealthBar <= 0) {
        alert('A DRAWN!');
        log.push(['A DRAWN!']);
        reset();
    } else if (monsterHealthBar.value <= 0) {
        alert('YOU WIN!')
        log.push(['Player WIN!']);
        reset();
    } else if (playerHealthBar.value <= 0 && bonusLife === 1) {
        --bonusLife;
        increasePlayerHealth(maxHP);
        bonusLifeEl.hidden = true;
        log.push(['Player used bonus life!']);
    } else if (playerHealthBar.value <= 0 && bonusLife === 0) {
        alert('YOU LOST!');
        log.push(['Player LOST!']);
        reset();
    }
}

attackBtn.addEventListener('click', attackButton)
strongAttackBtn.addEventListener('click', strongAttackButton)
healBtn.addEventListener('click', playerHeal)
logBtn.addEventListener('click', showLog)