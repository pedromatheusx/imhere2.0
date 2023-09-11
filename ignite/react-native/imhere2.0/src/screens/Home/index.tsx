import { Image, View, TextInput, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export interface ITask {
    name: string,
    stocked: boolean,
}

export default function Home() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    const [created, setCreated] = useState<number>(0);
    const [completed, setCompleted] = useState<number>(0);

    function handleTaskAdd() {
        if (tasks.some(item => item.name == taskName)) {
            return Alert.alert('Tarefa existe', 'Já existe um tarefa na lista com esse nome.')
        }

        setTasks(prevState => [...prevState, { name: taskName, stocked: false }])
        setTaskName('')
        setCreated(prevState => prevState + 1);
    }

    function handleTaskRemove(name: string) {
        Alert.alert('Remover', `Remover o tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task.name !== name));
                    setCreated(prevState => prevState - 1);
                }
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])
    }

    function handleStocked(name: string, checked: boolean) {
        setTasks(prevState => prevState.filter(task => task.name != name));
        setTasks(prevState => [...prevState, { name, stocked: !checked }]);

        if(!checked){
            setCompleted(prevStage => prevStage + 1);
        }else {
            setCompleted(prevStage => prevStage - 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image source={require('../../../assets/icon.png')} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#808080"}
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}><MaterialIcons name="add-circle-outline" size={18} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>

            <View style={styles.count}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: "#4EA8DE" }}>Criadas</Text>
                    <Text style={{ backgroundColor: '#333333', borderRadius: 50, paddingRight: 5, paddingLeft: 5, marginLeft: 5, color: "#FFF" }}>{created}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ backgroundColor: '#333333', borderRadius: 50, paddingRight: 5, paddingLeft: 5, marginRight: 5, color: "#FFF" }}>{completed}</Text>
                    <Text style={{ fontWeight: 'bold', color: "#8284FA" }}>Concluídas</Text>
                </View>

            </View>


            <FlatList
                data={tasks}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Task
                        key={item.name}
                        data={item}
                        onRemove={() => handleTaskRemove(item.name)}
                        onStocked={() => handleStocked(item.name, item.stocked)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <MaterialCommunityIcons name="file-document-outline" size={80} color="#333333" style={{ paddingTop: 30 }} />
                        <Text style={{ fontWeight: "bold", color: "#333333" }}> Você ainda não tem tarefas cadastradas</Text>
                        <Text style={{ color: "#333333" }}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />

        </View>
    );
}