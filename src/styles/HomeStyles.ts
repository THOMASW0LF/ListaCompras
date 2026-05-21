import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef2ff',
    },

    header: {
        backgroundColor: '#4f46e5',
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
    },

    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#ffffff',
    },

    subtitle: {
        marginTop: 6,
        fontSize: 15,
        color: '#dbeafe',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        gap: 12,
    },

    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 18,
        paddingHorizontal: 18,
        paddingVertical: 15,
        fontSize: 16,
        color: '#1e1b4b',
        elevation: 2,
    },

    addButton: {
        backgroundColor: '#f59e0b',
        borderRadius: 18,
        paddingHorizontal: 18,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },

    addButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 0.5,
    },

    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 22,
        gap: 12,
    },

    summaryCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 18,
        alignItems: 'center',
        elevation: 2,
    },

    summaryNumber: {
        fontSize: 24,
        fontWeight: '800',
        color: '#4f46e5',
    },

    summarylabel: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: '700',
        color: '#6b7280',
        textTransform: 'uppercase',
    },

    listContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        flexGrow: 1,
    },

    taskCard: {
        backgroundColor: '#ffffff',
        borderRadius: 22,
        padding: 18,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
    },

    taskContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#c7d2fe',
        backgroundColor: '#eef2ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },

    checkCircleDone: {
        backgroundColor: '#22c55e',
        borderColor: '#22c55e',
    },

    checkIcon: {
        color: '#ffffff',
        fontWeight: '800',
        fontSize: 14,
    },

    taskText: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
    },

    taskTextDone: {
        textDecorationLine: 'line-through',
        color: '#9ca3af',
    },

    deleteButton: {
        backgroundColor: '#fee2e2',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 14,
        marginLeft: 10,
    },

    deleteButtonText: {
        color: '#dc2626',
        fontSize: 12,
        fontWeight: '800',
    },

    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        paddingHorizontal: 30,
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#312e81',
    },

    emptyText: {
        marginTop: 10,
        fontSize: 15,
        color: '#6b7280',
        textAlign: 'center',
        lineHeight: 22,
    },
});

export default styles;