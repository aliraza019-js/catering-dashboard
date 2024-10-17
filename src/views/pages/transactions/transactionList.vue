<script setup>
import { computed, nextTick, ref, watch, onMounted } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import axios from 'axios';

const headers = ref([
    { title: 'Transaction Id', key: 'id' },
    { title: 'Card Holder name', key: 'name', align: 'start' },
    { title: 'Card Number', key: 'cardnumber' },
    { title: 'Card Type', key: 'cardtype' },
    { title: 'Tax Exempt', key: 'taxexempt' },
    { title: 'Order Amount', key: 'amount' },
    // { title: 'Tip Amount', key: 'tipamount' },
    // { title: 'Total Orders', key: 'totalOrders' },
]);

const transactions = ref([
    { id: '16f511b1-bd8b-44f1-9a7a-c2b8f16dadc9', name: 'John Doe', cardtype: 'Visa', cardnumber: '**** **** **** 4312', taxexempt: "Yes", tipamount: '100$', amount: '630$' },
    { id: '16f511b1-bd8b-44f1-9a7a-c2as213abc21', name: 'Test User', cardtype: 'Master Card', cardnumber: '**** **** **** 2312', taxexempt: "No", tipamount: '30$', amount: '2630$' },
    { id: '16f511b1-bd8b-44f1-9a7a-c29asib120as', name: 'Test User 2', cardtype: 'Visa', cardnumber: '**** **** **** 0122', taxexempt: "No", tipamount: '20$', amount: '1030$' },
])

// //fetching transactions 
// async function fetchtransactions() {
//   try {
//     const response = await axios.get('https://backend.vcaterings.com/api/transactions');
//       transactions.value = response.data.map((product) => ({
//         id: product.id,
//         name: product.name,
//         quantity: product.email,
//         category: product.category,
//         price: product.price, // Ensure this line is properly closed
//       }));
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//   }
// }

// onMounted(() => {
//   fetchtransactions();
// });
</script>

<template>
    <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Transactions">
                <v-data-table class="border rounded-md crud-tbl" :headers="headers" :items="transactions"
                    hide-default-footer>
                </v-data-table>
            </UiParentCard>
        </v-col>
    </v-row>
</template>