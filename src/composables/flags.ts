import { ref, onMounted, watch } from 'vue';
import { getAllFlags } from '../services/flag.service';
import { useFlags as useStoreFlags } from '@stores/flags';
import IFlag from '@interfaces/flags.interface';

export function useFlags() {
    const flags = ref([]);
    const countries = ref([] as IFlag[]);
    const store = useStoreFlags();

    const fetchFlags = async () => {
        try {
            flags.value = await getAllFlags();
            store.setCountries(flags.value)
        } catch (error) {
            console.error('Error fetching flags:', error);
        }
    };

    onMounted(async () => {
        await fetchFlags();
        countries.value = store.countries
    })    

    return {
        flags,
        fetchFlags,
        countries
    };
}
