exports.index = function (req, res) {
    let data = {}

    data.pageTitle = "Home Page"
    data.detail = "<p><strong>Hello</strong> World</p>"
    data.menus = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Login",
            url: "/login",
        }
    ]

    res.render("home", data)
}