var programVariables = [
        muscularEndurance = {
            sets: "2-4",
            reps: "25-60",
            load: "40-60%"
            rest: "1-2:00"
        },
        hypertrophy = {
            sets: "4-8",
            reps: "8-15",
            load: "60-80%"
            rest: "2-5:00"
        },
        strength = {
            sets: "3-7",
            reps: "1-5",
            load: "80-100%"
            rest: "2-5:00"
        },
        power = {
            sets: "3-5",
            reps: "1-5",
            load: "80-100%"
            rest: "2-6:00"
        }
];
        var pickFocus = prompt("Are you building a program for Muscular Endurance, Hypertrophy, Strength or Power?").toLowercase();
        exerciseVariables();

        function exerciseVariables(pickFocus, programVariables, muscularEndurance, hypertrophy, strength, power) {
            switch (pickFocus) {
                case "muscular endurance":
                    return programVariables.muscularEndurance;
                case "hypertrophy":
                    return programVariables.hypertrophy;
                case "strength":
                    return programVariables.strength;
                case "power":
                    return programVariables.power;
                default:
            }
        }
