// CSS
import '../../../css/components/list/listTasks.css';

// Components
import CheckTask from "../item/CheckTask";

export default function ListTasks() {
    return (
        <div className="container-card">
            <div className="content-tasks">
                <CheckTask task_title="Estudar React" />
                <CheckTask task_title="Estudar Laravel" />
                <CheckTask task_title="Estudar JavaScript" />
                <CheckTask task_title="Estudar CSS" />
                <CheckTask task_title="Estudar HTML" />
            </div>
        </div>
    );  
}