

setTimeout(function wakeUp(ifAlive) {
    if (ifAlive) {
        let morningEvents = {
            wakeUp: true,
        };
        console.log(morningEvents);

        setTimeout(function morningWash(morningEvents) {
            if (morningEvents.wakeUp) {
                morningEvents.doMorningWash = true;
                console.log(morningEvents);

                setTimeout(function doMorningExercise(morningEvents) {
                    if (morningEvents.wakeUp && morningEvents.doMorningWash) {
                        morningEvents.doMorningExercise = true;
                        console.log(morningEvents);

                        setTimeout(function haveBreakfast(morningEvents) {
                            if (morningEvents.wakeUp && morningEvents.doMorningWash && morningEvents.doMorningExercise) {
                                morningEvents.haveBreackfast = true;
                                console.log(morningEvents);

                                setTimeout(function goToWork(morningEvents) {
                                    if (morningEvents.haveBreackfast) {
                                        morningEvents.goToWork = true;
                                        console.log(morningEvents);
                                    } else {
                                        console.error('It is hard for me to go working :)');
                                    }
                                }, 1000, morningEvents)
                            } else {
                                console.error('Couldn`t eat');
                            }
                        }, 1000, morningEvents);
                    } else {
                        console.error('didn`t do morning exercises');
                    }
                }, 1000, morningEvents);
            } else {
                console.error('I can`t do morning washing');
            }
        }, 1000, morningEvents);
    } else {
        console.error('I can`t wake up. Something happen');
    }
}, 1000, true);



//--------------------------------------------------------------------------------------------------------------------------------------------------
function wakeUp(ifAlive) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ifAlive) {
                let morningEvents = {
                    wakeUp: true,
                };
                resolve(morningEvents);
            }
            reject('I can`t wake up. Something happen');
        }, 6000);
    });
}

function morningWash(morningEvents) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (morningEvents.wakeUp) {
                morningEvents.morningWash = true;
                resolve(morningEvents);
            }
            reject('I can`t do morning washing');
        }, 1000);
    })
}


function doMorningExercise(morningEvents) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (morningEvents.morningWash && morningEvents.wakeUp) {
                morningEvents.doMorningExercise = true;
                resolve(morningEvents);
            }
            reject('didn`t do morning exercises');
        }, 1000);
    })
}

function haveBreakfast(morningEvents) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (morningEvents.wakeUp && morningEvents.morningWash && morningEvents.doMorningExercise) {
                morningEvents.haveBreackfast = true;
                resolve(morningEvents);
            }
            reject('Couldn`t eat');
        }, 1000);
    })
}

function goToWork(morningEvents) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (morningEvents.haveBreackfast) {
                morningEvents.goToWork = true;
                resolve(morningEvents);
            }
            reject('It is hard for me to go working :)');
        }, 1000);
    })
}


wakeUp(true)
    .then(morningEvents => {
        return morningWash(morningEvents);
    })
    .then(morningEvents => {
        return doMorningExercise(morningEvents);
    })
    .then(morningEvents => {
        return haveBreakfast(morningEvents);
    })
    .then(morningEvents => {
        return goToWork(morningEvents);
    })
    .then(morningEvents => console.log(morningEvents))
    .catch(e => console.log(e));



async function morningSchedule() {
    try {
        let wakeUp1 = await wakeUp(true);
        console.log(wakeUp1);
        let morningWashing1 = await morningWash(wakeUp1);
        console.log(morningWashing1);
        let doMorningExercise1 = await doMorningExercise(morningWashing1);
        console.log(doMorningExercise1);
        let haveBreakfast1 = await haveBreakfast(doMorningExercise1);
        console.log(haveBreakfast1);
        return goToWork(haveBreakfast1);
    } catch (e) {
        console.log(e);
    }
}

morningSchedule()
    .then(morningEvents => {
    for (const eventKey in morningEvents) {
        console.log(`${eventKey}: ${morningEvents[eventKey]}`);
    }
});