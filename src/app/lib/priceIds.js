export const priceIds = {
    "gilled-blackwalleye": {
        test: "price_1RyxnSGuGV8LB8ftIS70XQ8c",
        live: "prod_Sxr9aMBP7i5gkA",
    },

    "gilled-bluecitrus": {
        test: "price_1RyvX2GuGV8LB8ft4w1qP1E3",
        live: "prod_Sxr9zly6fGK9sv",
    },

    "gilled-greenbabybass": {
        test: "price_1RyxtCGuGV8LB8ftb5CHxFW2",
        live: "prod_Sxr8RYB1W51xh9",
    },

    "gilled-ivorygoldshiner": {
        test: "price_1RyxwEGuGV8LB8ftpZBKkApp",
        live: "prod_Sxr8XVwK2M3jfm",
    },

    "gilled-orangebluegill": {
        test: "price_1Ryy2YGuGV8LB8ft5jcIEHgU",
        live: "prod_Sxr8O4zzxkg89A",
    },

    "gilled-purplepumpkin": {
        test: "price_1Ryy4EGuGV8LB8ftDMNs18Xy",
        live: "prod_Sxr8AbAqCpzy5K",
    },

    "gilled-redgizzard": {
        test: "price_1Ryy5WGuGV8LB8ftn3aC1YYi",
        live: "prod_Sxr8LB4gIuUCn7",
    },

    "gilled-yellowsexyshad": {
        test: "price_1Ryy6WGuGV8LB8ft8CxBTa6e",
        live: "prod_Sxr8OFinXGkw5B",
    },

    "bluegill": {
        test: "price_1Rz0EIGuGV8LB8ftfHYmr9lw",
        live: "prod_Sxr8pGvAB01ah0",
    },

    "greenchartreuse": {
        test: "price_1Rz0JpGuGV8LB8ft9dXOhhqN",
        live: "prod_Sxr897SSGSosf2"
    },

    "pumpkinseed": {
        test: "price_1RzJ7FGuGV8LB8ft6s2js9e2",
        live: "prod_Sxr8RKa2azXQkj"
    },

    "gizzardshad": {
        test: "price_1RzJARGuGV8LB8ftjOTrn9Rn",
        live: "prod_Sxr8T4VO0vN6PL"
    },

    "sexyshad": {
        test: "price_1RzJBJGuGV8LB8fthrbmh0TE",
        live: "prod_Sxr8PpaYENIGKA"
    },

    "topwalker-blackcrappie": {
        test: "price_1RzJWuGuGV8LB8ftteM1NGEA",
        live: "prod_Sxr8HI09pcfanP"
    },

    "topwalker-bluechartreuse": {
        test: "price_1RzJY3GuGV8LB8ftDt27nQPa",
        live: "prod_Sxr8T87Z8NV79F"
    },

    "topwalker-graytennessee": {
        test: "price_1RzJZfGuGV8LB8ftfjATy2JI",
        live: "prod_Sxr8ppa09QgiVU"
    },

    "topwalker-ivorywalleye": {
        test: "price_1RzJadGuGV8LB8ftHwx322eo",
        live: "prod_Sxr72AyB1rsnKN"
    },

    "topwalker-orangebluegill": {
        test: "price_1RzJbuGuGV8LB8fttcd0GG4I",
        live: "prod_Sxr7QytG7B15Eq"
    },

    "topwalker-orangecitrus": {
        test: "price_1RzJd0GuGV8LB8ftwDnvOUrm",
        live: "prod_Sxr7JHVaxSNK4s"
    },

    "topwalker-purplepumpkin": {
        test: "price_1RzJe7GuGV8LB8ftdtkx8xmV",
        live: "prod_Sxr7C2b33ifSZS"
    },

    "topwalker-redgizzard": {
        test: "price_1RzJfFGuGV8LB8ftQgqhRQHr",
        live: "prod_Sxr7GXC2iCOPxv"
    },

    "topwalker-redblackgizzard": {
        test: "price_1RzM8oGuGV8LB8ftWRfoOZrx",
        live: "prod_Sxr7yJhwBAk0Xm"
    },

    "topwalker-whitegoldshiner": {
        test: "price_1RzMA0GuGV8LB8ftlm9P8qyF",
        live: "prod_Sxr5FmvqzZjQix"
    },

    "topwalker-yellowsexyshad": {
        test: "price_1RzMAtGuGV8LB8ftrDnpZuMf",
        live: "prod_Sxr5jKMtYdQrfg"
    },

    "topwalker-yellowperch": {
        test: "price_1RzMCfGuGV8LB8ft638xvLHA",
        live: "prod_Sxr5NlVjEjsOQe"
    },

    "topwalker-browntrout": {
        test: "price_1RzMDqGuGV8LB8ftDlxyVzok",
        live: "prod_Sxr5WL7woBYw6K"
    },

    "topwalker-candyshad": {
        test: "price_1RzMEnGuGV8LB8ftRy6vpiXE",
        live: "prod_Sxr4zh1gqUo7x3"
    },
};

export function priceIdFor(id) {
    const isLive = process.env.NEXT_PUBLIC_STRIPE_MODE === "live";
    return PRICES[id]?.[isLive ? "live" : "test"];
}