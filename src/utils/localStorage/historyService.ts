const KEY = "ZTC-history";
const MAX_COMIC_IN_HISTORY = 60;

const getAll = (): IHistory[] => {
    try {
        const saved = localStorage.getItem(KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

const saveAll = (arr: IHistory[]) => {
    try {
        localStorage.setItem(KEY, JSON.stringify(arr));
    } catch {}
};

export const historyService = {
    getAll,
    getById(id: string) {
        return getAll().find(item => item._id === id);
    },
    getBySlug(slug: string) {
        return getAll().find(item => item.slug === slug);
    },
    save(history: IHistory) {
        const arr = getAll();
        const idx = arr.findIndex(item => item.slug === history.slug);

        if (idx !== -1) {
            arr[idx] = history;
        } else {
            if (arr.length < MAX_COMIC_IN_HISTORY) {
                arr.push(history);
            }
        }

        saveAll(arr);
    },
    delete(id: string) {
        saveAll(getAll().filter(item => item._id !== id));
    },
    deleteMany(ids: string[]) {
        const set = new Set(ids);
        saveAll(getAll().filter(item => !set.has(item._id)));
    },
    clear() {
        localStorage.removeItem(KEY);
    },
};
