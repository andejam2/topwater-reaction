export const priceIds = {
    "gilled-blackwalleye": {
        test: "price_1RyxnSGuGV8LB8ftIS70XQ8c",
        live: "",
    },

    "gilled-bluecitrus": {
        test: "price_1RyvX2GuGV8LB8ft4w1qP1E3",
        live: "",
    },

    "gilled-greenbabybass": {
        test: "price_1RyxtCGuGV8LB8ftb5CHxFW2",
        live: "",
    },

    "gilled-ivorygoldshiner": {
        test: "price_1RyxwEGuGV8LB8ftpZBKkApp",
        live: "",
    },

    "gilled-orangebluegill": {
        test: "price_1Ryy2YGuGV8LB8ft5jcIEHgU",
        live: "",
    },

    "gilled-purplepumpkin": {
        test: "price_1Ryy4EGuGV8LB8ftDMNs18Xy",
        live: "",
    },

    "gilled-redgizzard": {
        test: "price_1Ryy5WGuGV8LB8ftn3aC1YYi",
        live: "",
    },

    "gilled-yellowsexyshad": {
        test: "price_1Ryy6WGuGV8LB8ft8CxBTa6e",
        live: "",
    },

    "bluegill": {
        test: "price_1Rz0EIGuGV8LB8ftfHYmr9lw",
        live: "",
    },

    "greenchartreuse": {
        test: "price_1Rz0JpGuGV8LB8ft9dXOhhqN",
        live: ""
    },

    "pumpkinseed": {
        test: "price_1RzJ7FGuGV8LB8ft6s2js9e2",
        live: ""
    },

    "gizzardshad": {
        test: "price_1RzJARGuGV8LB8ftjOTrn9Rn",
        live: ""
    },

    "sexyshad": {
        test: "price_1RzJBJGuGV8LB8fthrbmh0TE",
        live: ""
    },

    "topwalker-blackcrappie": {
        test: "price_1RzJWuGuGV8LB8ftteM1NGEA",
        live: ""
    },

    "topwalker-bluechartreuse": {
        test: "price_1RzJY3GuGV8LB8ftDt27nQPa",
        live: ""
    },

    "topwalker-graytennessee": {
        test: "price_1RzJZfGuGV8LB8ftfjATy2JI",
        live: ""
    },

    "topwalker-ivorywalleye": {
        test: "price_1RzJadGuGV8LB8ftHwx322eo",
        live: ""
    },

    "topwalker-orangebluegill": {
        test: "price_1RzJbuGuGV8LB8fttcd0GG4I",
        live: ""
    },

    "topwalker-orangecitrus": {
        test: "price_1RzJd0GuGV8LB8ftwDnvOUrm",
        live: ""
    },

    "topwalker-purplepumpkin": {
        test: "price_1RzJe7GuGV8LB8ftdtkx8xmV",
        live: ""
    },

    "topwalker-redgizzard": {
        test: "price_1RzJfFGuGV8LB8ftQgqhRQHr",
        live: ""
    },

    "topwalker-redbabybass": {
        test: "price_1RzM8oGuGV8LB8ftWRfoOZrx",
        live: ""
    },

    "topwalker-whitegoldshiner": {
        test: "price_1RzMA0GuGV8LB8ftlm9P8qyF",
        live: ""
    },

    "topwalker-yellowsexyshad": {
        test: "price_1RzMAtGuGV8LB8ftrDnpZuMf",
        live: ""
    },

    "topwalker-yellowperch": {
        test: "price_1RzMCfGuGV8LB8ft638xvLHA",
        live: ""
    },

    "topwalker-browntrout": {
        test: "price_1RzMDqGuGV8LB8ftDlxyVzok",
        live: ""
    },

    "topwalker-candyshad": {
        test: "price_1RzMEnGuGV8LB8ftRy6vpiXE",
        live: ""
    },
};

export function priceIdFor(id) {
    const isLive = process.env.NEXT_PUBLIC_STRIPE_MODE === "live";
    return PRICES[id]?.[isLive ? "live" : "test"];
}