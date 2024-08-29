/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {leaders: [{name:"meepo", points:100}]};
};