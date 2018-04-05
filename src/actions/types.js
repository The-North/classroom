const actionTypes = { 
  AUTH_USER: 'auth_user',  
	UNAUTH_USER:'unauth_user',
	AUTH_ERROR:'auth_error',
	SET_CURRENT_USER: 'SET_CURRENT_USER',
	PROTECTED_TEST: 'protected_test',
	GET_TEACHERS_CLASSES: 'get_teachers_classes',
	TOGGLE_CLASS_BUILDER_MODAL: 'toggle_class_builder_modal',
	ADD_NEW_CLASS_ACTION: 'add_class_action',
	GET_UPDATED_CLASS_LIST: 'get_updated_class_list',
	UPDATE_NEW_CLASS_YEAR_ACTION: 'update_new_class_year_action',
	UPDATE_NEW_CLASS_NAME_ACTION: 'update_new_class_name_action',
	UPDATE_NEW_CLASS_SUBJECT_ACTION: 'update_new_class_subject_action',
	SELECT_EXISTING_SUBJECT_ACTION: 'select_existing_subject_action',
	UPDATE_NEW_CLASS_QUARTER_ACTION: 'update_new_class_quarter_action',
	GET_ALL_STUDENTS_ACTION: 'get_all_students_action',
	TEACHER_ENTER_CLASS_ACTION: 'enter_class_action',
	TEACHER_ADD_STUDENT_TO_CLASS_ACTION: 'teacher_add_student_to_class_action',
	UPDATE_TARGET_CLASS_ACTION: 'update_target_class_action',
	GET_STUDENTS_BELONGS_TO_A_CLASS_ACTION: 'get_students_belong_to_a_class_action',
	CLASS_GO_LIVE_ACTION: 'class_go_live_action',
	GET_CLASSES_BELONG_TO_A_STUDENT_ACTION: 'get_classes_belong_to_a_student_action',
	UPDATE_NEW_CLASS_YEAR_ACTION: 'update_new_class_year_action',
	UPDATE_CLASS_DATA_TEACHER: 'update_class_data_teacher',
	UPDATE_CLASS_DATA_STUDENT: 'update_class_data_student',
	UPDATE_CLASS_DATA: 'update_class_data',
	SELECT_EXISTING_STUDENT_TO_ADD: 'select_existing_student_to_add',
	ADD_A_STUDENT_TO_CLASS_ACTION: 'add_a_student_to_class_action',
	GET_ALL_SUBJECTS: 'get_all_subjects',
	////// StudentViewQuiz //////
	GET_QUIZ: 'get_quiz',
	NEXT_QUESTION: 'next_question',
	PREVIOUS_QUESTION: 'previous_question',
	UPDATE_STUDENT_TARGET_CLASS_ACTION: 'get_student_target_class_action',
	LISTENING_FOR_LIVE_CLASSES: 'listening_for_live_classes',
	WATCH_CLASS_GO_LIVE_ACTION: 'watch_class_go_live_action',
	TOGGLE_STUDENT_LIVE_STATUS: 'toggle_student_live_status',
	CHANGE_CLASS_LABEL_WHEN_LIVE: 'change_class_label_when_live',
	FETCH_CLASS_DATA: 'FETCH_CLASS_DATA',
	TOGGLE_QUIZ_LAUNCHER: 'TOGGLE_QUIZ_LAUNCHER',
	SET_QUIZ_TIME: 'SET_QUIZ_TIME',
	GET_CLASS_STATUS: 'GET_CLASS_STATUS',
	SET_QUIZ_WEIGHT: 'SET_QUIZ_WEIGHT',

	/******************* Quiz Grades views*********************/
	ADD_STUDENT_QUIZ_GRADES_STUDENTVIEW: 'add_student_quiz_grades_studentview',
	TOGGLE_GRADES_VIEW: 'TOGGLE_GRADES_VIEW',

	/******************* Quiz/Question Builder*********************/
	SHOW_QUIZ_MODAL_ACTION: 'show_quiz_modal_action',
	SET_NEW_QUIZ_NAME_ACTION: 'set_new_quiz_name_action',
	SET_NEW_QUIZ_SUBJECT_ACTION: 'set_new_quiz_subject_action',
	SET_NEW_QUIZ_SUBJECT_BY_SELECTION_ACTION: 'set_new_quiz_subject_by_selection_action',
	SET_QUESTION_NUMBER_ACTION: 'set_question_number_action',
	ADD_ANSWER_ACTION: 'add_answer_action',
	ADD_QUESTION_TEXT_ACTION: 'add_question_text_action',
	ADD_ANSWER_TEXT_ACTION: 'add_answer_text_action',
	CHOOSE_CORRECT_ANSWER_ACTION: 'choose_correct_answer_action',
	ADD_NEW_QUIZZES: 'add_new_quizzes',
	FETCH_QUIZZES: 'fetch_quizzes',
	CLOSE_QUIZ_BUILDER_MODAL: 'close_quiz_modal_action',
	DELETE_QUESTION_ACTION: 'delete_question_action',
	DELETE_ANSWER_ACTION: 'delete_answer_action',
	FETCH_QUESTIONS: 'fetch_questions',
	SELECT_QUESTION: 'select_question',
	ADD_RECYCLED_QUESTION: 'add_recycled_question',

	TOGGLE_THUMBPOLL: 'TOGGLE_THUMBPOLL',
	GET_TAKEN_QUIZZES_ACTION: 'get_taken_quizzes_action',
	SELECT_GRAPH_TO_SHOW_ACTION: 'select_graph_to_show_action'
}

export default actionTypes