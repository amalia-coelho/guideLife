// CSS
import '../../../css/components/item/checkTask.css';

export default function Task({task_title}){
    return(
        <div className="container-task">
            <input type="checkbox" name="task" id="task" />
            <label htmlFor="task">{task_title}</label>
        </div>
    );
}