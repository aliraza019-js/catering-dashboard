<script setup>
import { computed, nextTick, ref, watch, onMounted } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import axios from 'axios';

const page = ref({ title: 'Orders' });

const dialog = ref(false)
const headers = ref([
 { title: 'Order Id', key: 'id' },
  { title: 'Customer Name', key: 'customerName', align: 'start' },
  // { title: 'Email', key: 'customerEmail' },
  // { title: 'Phone', key: 'customerPhone' },
  { title: 'Total Items', key: 'totalItems' },
  { title: 'Delivery Method', key: 'deliveryMethod' },
  { title: 'Total Amount', key: 'totalAmount' },
  { title: 'Status', key: 'status' },
  { title: 'Order Date', key: 'createdAt' },
]);
const orders = ref([])
async function fetchOrders() {
  try {
    const response = await axios.get('http://localhost:3002/api/orders/all-orders');
    orders.value = response?.data.map(order => ({
      id : order._id,
      customerName: order.customer.name,
      // customerEmail: order.customer.email,
      // customerPhone: order.customer.phone,
      deliveryMethod: order.deliveryMethod,
      totalItems : order.items?.length,
      address: order.deliveryMethod === 'pickup' ? order?.pickupDetails?.address : order?.deliveryDetails?.address,
      totalAmount: `$${(order.totalAmount).toFixed(2)}`,
      status: order.status,
      createdAt: new Date(order?.createdAt).toLocaleString(),
    }));
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

function close() {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}

watch(dialog, val => {
  val || close()
})
// initialize()
onMounted(() => {
  fetchOrders();
});
</script>

<template>
  <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Orders">
        <v-data-table 
         class="border rounded-md crud-tbl" 
         :headers="headers" 
         :items="orders"
          :sort-by="[{ key: 'createdAt', order: 'desc' }]"
          hide-default-footer
          >
          <template v-slot:[`item.customerName`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span class="text-truncate" style="max-width: 150px;" v-bind="attrs" v-on="on">
                  {{ item.customerName }}
                </span>
              </template>
              <span>{{ item.customerName }}</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </UiParentCard>
    </v-col>
  </v-row>
</template>

<style scoped>
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>