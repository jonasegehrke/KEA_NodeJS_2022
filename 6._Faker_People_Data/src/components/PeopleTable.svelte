<script>
    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";
    import faker from "@faker-js/faker";
    import { v4 as uuidv4 } from "uuid";

    const people = [];

    for (let i = 0; i < 100; i++) {
        people.push({
            id: uuidv4(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
        });
    }

    people.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
</script>

<table>
    <TableHead col1="Name" col2="Email" col3="Picture" />
    {#each people as person (person.id)}
        <TableRow
            name={person.name}
            email={person.email}
            avatar={person.avatar}
        />
    {/each}
</table>

<style>
    table {
        border: 1px solid;
        border-collapse: collapse;
    }
</style>
