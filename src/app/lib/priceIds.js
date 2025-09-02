export const priceIds = {
    "gilled-blackwalleye": {
        test: "price_1RyxnSGuGV8LB8ftIS70XQ8c",
        live: "price_1S1vQlGuGV8LB8ftDDJT8OXR",
    },

    "gilled-bluecitrus": {
        test: "price_1RyvX2GuGV8LB8ft4w1qP1E3",
        live: "price_1S1vQoGuGV8LB8ftbWjIri1s",
    },

    "gilled-greenbabybass": {
        test: "price_1RyxtCGuGV8LB8ftb5CHxFW2",
        live: "price_1S1vQgGuGV8LB8ftaO6IzbGB",
    },

    "gilled-ivorygoldshiner": {
        test: "price_1RyxwEGuGV8LB8ftpZBKkApp",
        live: "price_1S1vQdGuGV8LB8ftW5s4GIRr",
    },

    "gilled-orangebluegill": {
        test: "price_1Ryy2YGuGV8LB8ft5jcIEHgU",
        live: "price_1S1vQbGuGV8LB8ftnis5sSam",
    },

    "gilled-purplepumpkin": {
        test: "price_1Ryy4EGuGV8LB8ftDMNs18Xy",
        live: "price_1S1vQWGuGV8LB8ftKRFW8bEg",
    },

    "gilled-redgizzard": {
        test: "price_1Ryy5WGuGV8LB8ftn3aC1YYi",
        live: "price_1S1vQTGuGV8LB8ftjCGt2UY9",
    },

    "gilled-yellowsexyshad": {
        test: "price_1Ryy6WGuGV8LB8ft8CxBTa6e",
        live: "price_1S1vQRGuGV8LB8ft4vEufQTU",
    },

    "bluegill": {
        test: "price_1Rz0EIGuGV8LB8ftfHYmr9lw",
        live: "price_1S1vQ3GuGV8LB8ftw6bRVArR",
    },

    "greenchartreuse": {
        test: "price_1Rz0JpGuGV8LB8ft9dXOhhqN",
        live: "price_1S1vQ1GuGV8LB8ftAzmGs1FK"
    },

    "pumpkinseed": {
        test: "price_1RzJ7FGuGV8LB8ft6s2js9e2",
        live: "price_1S1vPyGuGV8LB8ftyqo5mN1s"
    },

    "gizzardshad": {
        test: "price_1RzJARGuGV8LB8ftjOTrn9Rn",
        live: "price_1S1vPvGuGV8LB8ft2NbVyrrs"
    },

    "sexyshad": {
        test: "price_1RzJBJGuGV8LB8fthrbmh0TE",
        live: "price_1S1vPtGuGV8LB8ftOusOR0AC"
    },

    "topwalker-blackcrappie": {
        test: "price_1RzJWuGuGV8LB8ftteM1NGEA",
        live: "price_1S1vPqGuGV8LB8ftLkj84guK"
    },

    "topwalker-bluechartreuse": {
        test: "price_1RzJY3GuGV8LB8ftDt27nQPa",
        live: "price_1S1vPoGuGV8LB8ftA651VmLE"
    },

    "topwalker-graytennessee": {
        test: "price_1RzJZfGuGV8LB8ftfjATy2JI",
        live: "price_1S1vPmGuGV8LB8ftjZM4GxPx"
    },

    "topwalker-ivorywalleye": {
        test: "price_1RzJadGuGV8LB8ftHwx322eo",
        live: "price_1S1vPjGuGV8LB8ftN8lkTno6"
    },

    "topwalker-orangebluegill": {
        test: "price_1RzJbuGuGV8LB8fttcd0GG4I",
        live: "price_1S1vPgGuGV8LB8ftzPlzQ612"
    },

    "topwalker-orangecitrus": {
        test: "price_1RzJd0GuGV8LB8ftwDnvOUrm",
        live: "price_1S1vPdGuGV8LB8ft21tla8B6"
    },

    "topwalker-purplepumpkin": {
        test: "price_1RzJe7GuGV8LB8ftdtkx8xmV",
        live: "price_1S1vPWGuGV8LB8ftVnnEURSJ"
    },

    "topwalker-redgizzard": {
        test: "price_1RzJfFGuGV8LB8ftQgqhRQHr",
        live: "price_1S1vPTGuGV8LB8ftDhiVFytm"
    },

    "topwalker-redblackgizzard": {
        test: "price_1RzM8oGuGV8LB8ftWRfoOZrx",
        live: "price_1S1vPLGuGV8LB8ft8v3lSPEe"
    },

    "topwalker-whitegoldshiner": {
        test: "price_1RzMA0GuGV8LB8ftlm9P8qyF",
        live: "price_1S1vN1GuGV8LB8ftbcxpvESJ"
    },

    "topwalker-yellowsexyshad": {
        test: "price_1RzMAtGuGV8LB8ftrDnpZuMf",
        live: "price_1S1vMyGuGV8LB8ftCBtdlrad"
    },

    "topwalker-yellowperch": {
        test: "price_1RzMCfGuGV8LB8ft638xvLHA",
        live: "price_1S1vMvGuGV8LB8ft6I0vSzXP"
    },

    "topwalker-browntrout": {
        test: "price_1RzMDqGuGV8LB8ftDlxyVzok",
        live: "price_1S1vMsGuGV8LB8ft9APcTW89"
    },

    "topwalker-candyshad": {
        test: "price_1RzMEnGuGV8LB8ftRy6vpiXE",
        live: "price_1S1vMmGuGV8LB8ftCsUHDvnO"
    },
};

export function priceIdFor(id) {
    const isLive = process.env.NEXT_PUBLIC_STRIPE_MODE === "live";
    return PRICES[id]?.[isLive ? "live" : "test"];
}