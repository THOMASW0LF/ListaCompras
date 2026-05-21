import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
    Keyboard,
} from 'react-native';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/HomeStyles';

type Item = {
    id: string;
    name: string;
    bought: boolean;
};

const ITEMS_STORAGE_KEY = '@shopping-list:items';

export default function HomeScreen() {
    const [itemText, setItemText] = useState<string>('');
    const [items, setItems] = useState<Item[]>([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function loadItems() {
            try {
                const storedItems = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

                if (storedItems) {
                    setItems(JSON.parse(storedItems));
                }
            } catch (error) {
                console.log('Erro ao carregar itens:', error);
                Alert.alert('Erro', 'Não foi possível carregar os itens salvos.');
            } finally {
                setIsReady(true);
            }
        }

        loadItems();
    }, []);

    useEffect(() => {
        if (!isReady) {
            return;
        }

        async function saveItems() {
            try {
                await AsyncStorage.setItem(
                    ITEMS_STORAGE_KEY,
                    JSON.stringify(items)
                );
            } catch (error) {
                console.log('Erro ao salvar itens:', error);
                Alert.alert('Erro', 'Não foi possível salvar os itens.');
            }
        }

        saveItems();
    }, [items, isReady]);

    function addItem() {
        const trimmedItem = itemText.trim();

        if (!trimmedItem) {
            Alert.alert('Atenção', 'Digite um item antes de adicionar.');
            return;
        }

        const newItem: Item = {
            id: String(Date.now()),
            name: trimmedItem,
            bought: false,
        };

        setItems((currentItems) => [newItem, ...currentItems]);
        setItemText('');
        Keyboard.dismiss();
    }

    function toggleItemBought(id: string) {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id
                    ? { ...item, bought: !item.bought }
                    : item
            )
        );
    }

    function deleteItem(id: string) {
        setItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    }

    function renderItem({ item }: { item: Item }) {
        return (
            <View style={styles.taskCard}>
                <TouchableOpacity
                    style={styles.taskContent}
                    onPress={() => toggleItemBought(item.id)}
                    activeOpacity={0.8}
                >
                    <View
                        style={[
                            styles.checkCircle,
                            item.bought && styles.checkCircleDone,
                        ]}
                    >
                        {item.bought && (
                            <Text style={styles.checkIcon}>✓</Text>
                        )}
                    </View>

                    <Text
                        style={[
                            styles.taskText,
                            item.bought && styles.taskTextDone,
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteItem(item.id)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#f5f7fb"
            />

            <View style={styles.header}>
                <Text style={styles.title}>Lista de Compras</Text>
                <Text style={styles.subtitle}>
                    Organize seus itens
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um item"
                    value={itemText}
                    onChangeText={setItemText}
                    onSubmitEditing={addItem}
                    returnKeyType="done"
                />

                <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.8}
                    onPress={addItem}
                >
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.summaryContainer}>
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>
                        {items.length}
                    </Text>
                    <Text style={styles.summarylabel}>Total</Text>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>
                        {
                            items.filter(
                                (item) => !item.bought
                            ).length
                        }
                    </Text>
                    <Text style={styles.summarylabel}>
                        Faltando
                    </Text>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>
                        {
                            items.filter(
                                (item) => item.bought
                            ).length
                        }
                    </Text>
                    <Text style={styles.summarylabel}>
                        Comprados
                    </Text>
                </View>
            </View>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyTitle}>
                            Nenhum item cadastrado
                        </Text>

                        <Text style={styles.emptyText}>
                            Adicione seu primeiro item
                        </Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}