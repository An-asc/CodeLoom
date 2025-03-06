<template>
  <table>
    <thead>
      <tr>
        <th>Servicio</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Landing Page</td>
        <td>$500</td>
      </tr>
      <tr>
        <td>Sitio Web</td>
        <td>$1000</td>
      </tr>
      <tr>
        <td>Página Web</td>
        <td>$1500</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PricingTable',
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
</style>