<script setup>
import { computed, nextTick, ref, watch, onMounted } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import axios from 'axios';

const headers = ref([
  { title: 'Product Id', key: 'id' },
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Category', key: 'category' },
  { title: 'Price', key: 'price' },
  // { title: 'Total Orders', key: 'totalOrders' },
]);

const products = ref([])

//fetching products 
async function fetchproducts() {
  try {
    const response = await axios.get('https://backend.vcaterings.com/api/products');
    console.log('added', response.data),
      products.value = response.data.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.email,
        category: product.category,
        price: product.price + '$', // Ensure this line is properly closed
      }));
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

onMounted(() => {
  fetchproducts();
});
</script>

<template>
  <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Products">
        <v-data-table class="border rounded-md crud-tbl" :headers="headers" :items="products" hide-default-footer>
        </v-data-table>
      </UiParentCard>
    </v-col>
  </v-row>
</template>