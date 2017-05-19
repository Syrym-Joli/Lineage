var config = {
        container: "#custom-colored",

        nodeAlign: "BOTTOM",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
            name: "Мама",
            title: "ываР",
            contact: "ываа",
            gender: "Ж",
        },
        image: "https://www.materialui.co/materialIcons/action/face_grey_54x54.png"
    },

    cto = {
        parent: ceo,
        text:{
            name: "Сестра",
            title: "ывяаыВА",
            gender: "Ж",
        },
        image: "https://www.materialui.co/materialIcons/action/face_grey_54x54.png"
    },
    cbo = {
        parent: ceo,
        childrenDropLevel: 2,
        HTMLclass: 'light-gray',
        text: {
            name: "Я",
            title: "ывоплЛ",
            gender: "М",
        },
        image: "https://www.materialui.co/materialIcons/action/account_circle_grey_54x54.png"
    },
    cdo = {
        parent: ceo,
        text:{
            name: "John Green",
            title: "Chief accounting officer",
            contact: "Tel: 01 213 123 134",
        },
        image: "https://www.materialui.co/materialIcons/action/account_circle_grey_54x54.png"
    },
    cio = {
        parent: cto,
        text:{
            name: "Ron Blomquist",
            title: "Chief Information Security Officer"
        },
        image: "https://www.materialui.co/materialIcons/action/account_circle_grey_54x54.png"
    },
    ciso = {
        parent: cto,
        text:{
            name: "Michael Rubin",
            title: "Chief Innovation Officer",
            contact: "we@aregreat.com"
        },
        image: "https://www.materialui.co/materialIcons/action/account_circle_grey_54x54.png"
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Erica Reel",
            title: "Chief Customer Officer"
        },
        link: {
            href: "http://lineages.azurewebsites.net/Ltree/index"
        },
        image: "https://www.materialui.co/materialIcons/action/account_circle_grey_54x54.png"
    },

    chart_config = [
        config,
        ceo,cto,cbo,
        cdo,cio,ciso,
        cio2,
    ];