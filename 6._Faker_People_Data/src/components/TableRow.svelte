<script>
    export let name;
    export let email;
    export let avatar;
</script>

<tbody>
    <td>{name}</td>
    <td>{email}</td>
    <td><img src={avatar} alt="photo of {name}" /> </td>
</tbody>

<style>
    img {
        width: 50px;
    }
    td {
        padding: 5px;
        border: 1px solid;
    }
</style>
