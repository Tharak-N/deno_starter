

// const file = await Deno.open('files/Vue-Essentials-Cheat-Sheet.pdf', {read: true})
// file.read


const responseHandler = (): Response => {
    return new Response('Hello Tharak')
}

Deno.serve(responseHandler)


// Here we start a simple server
