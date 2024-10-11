<script setup>
import { computed, nextTick, ref, watch, onMounted } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import axios from 'axios';

const headers = ref([
 { title: 'Customer Id', key: 'id' },
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
  { title: 'Total Orders', key: 'totalOrders' },
]);

const customers = ref([])

//fetching customers 
async function fetchCustomers() {
  try {
    const response = await axios.get('http://localhost:3002/api/customers/all');
    customers.value = response?.data.map(customer => ({
      id : customer._id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      totalOrders: customer?.orders?.length,
    }));
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

onMounted(() => {
  fetchCustomers();
});
</script>

<template>
  <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Customers">
        <v-data-table 
         class="border rounded-md crud-tbl" 
         :headers="headers" 
         :items="customers"
          hide-default-footer
          >
          <template v-slot:top>
            <v-toolbar flat class="border-bottom">
              <v-toolbar-title>Customers Detail</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
        </v-data-table>
      </UiParentCard>
    </v-col>
  </v-row>
</template>