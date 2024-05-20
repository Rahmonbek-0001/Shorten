export default function auth({ next, router }) {
    console.log(next)
    console.log(router)

    return next()
}