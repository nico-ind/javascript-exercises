const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS";

    } else {
        if (num === 0) {
            return 0;

        } else if (num === 1) {
            return 1;

        } else {
            let fibonacci = [0 , 1];

            for (let i = 2; i < num + 1; i++) {

                const num_i = fibonacci[i-1] + fibonacci[i-2];
                fibonacci.push(num_i);
            }

            return fibonacci[num];
        }     
    }
};

// Do not edit below this line
module.exports = fibonacci;
