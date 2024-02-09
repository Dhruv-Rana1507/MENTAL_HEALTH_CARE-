import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/check.module.css';
import Usernav from '../component/usernav';

const CheckYourselfPage = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [suggestedDoctors, setSuggestedDoctors] = useState([]);

  const diseases = [
    { name: 'Depression', symptoms: ['Sadness', 'Fatigue', 'Changes in sleep'] },
    { name: 'Anxiety', symptoms: ['Excessive worrying', 'Restlessness', 'Difficulty concentrating'] },
    { name: 'Stress', symptoms: ['Headaches', 'Muscle tension', 'Irritability'] },
    { name: 'Bipolar disorder', symptoms: ['Extreme mood swings', 'Energy changes', 'Sleep disturbances'] },
    { name: 'Schizophrenia', symptoms: ['Delusions', 'Hallucinations', 'Disorganized thinking'] },
    { name: 'Eating disorders', symptoms: ['Preoccupation with food, weight, and body shape', 'Binge eating', 'Purging behaviors'] },
    { name: 'Obsessive-Compulsive Disorder (OCD)', symptoms: ['Obsessions', 'Compulsions', 'Fear of contamination'] },
    { name: 'Post-Traumatic Stress Disorder (PTSD)', symptoms: ['Flashbacks', 'Nightmares', 'Avoidance'] },
    { name: 'Multiple Personality Disorder (Dissociative Identity Disorder)', symptoms: ['Presence of two or more distinct identity states', 'Amnesia', 'Identity disturbance'] },
    { name: 'Histrionic Personality Disorder', symptoms: ['Attention-seeking behavior', 'Excessive emotions', 'Need for reassurance'] },
    { name: 'Agoraphobia', symptoms: ['Fear of places or situations that might cause panic', 'Avoidance of certain situations', 'Dependency on others'] },
  ];

  const handleCheckboxChange = (symptom) => {
    const updatedSymptoms = [...selectedSymptoms];
    if (updatedSymptoms.includes(symptom)) {
      updatedSymptoms.splice(updatedSymptoms.indexOf(symptom), 1);
    } else {
      updatedSymptoms.push(symptom);
    }
    setSelectedSymptoms(updatedSymptoms);
  };

  const handleSubmit = async () => {
    if (parseInt(age, 10) < 18 || parseInt(age, 10) > 40) {
      setResult('Invalid age. Please make sure you are between 18 and 40.');
      return;
    }

    const matchingDiseases = diseases.filter((disease) =>
      disease.symptoms.some((symptom) => selectedSymptoms.includes(symptom))
    );

    if (matchingDiseases.length > 0) {
      const resultString = `Based on your symptoms, you might have: ${matchingDiseases
        .map((disease) => disease.name)
        .join(', ')}`;
      setResult(resultString);

      try {
        const response = await axios.post('http://localhost:8001/suggest-doctors', {
          diseases: matchingDiseases.map((disease) => disease.name),
        });
        setSuggestedDoctors(response.data.suggestedDoctors);
      } catch (error) {
        console.error('Error suggesting doctors:', error.message);
        setResult('Error suggesting doctors. Please try again.');
      }
    } else {
      setResult('No Diseases found.');
    }

    try {
      await axios.post('http://localhost:8001/chk', {
        name: username,
        age,
        gender,
        symptoms: selectedSymptoms,
        description,
      });

      setUsername('');
      setAge('');
      setGender('');
      setSelectedSymptoms([]);
      setDescription('');
    } catch (error) {
      console.error('Error submitting data:', error.message);
      setResult('Error submitting data. Please try again.');
    }
  };

  return (
    <>
      <Usernav />
      <div className={styles['check-yourself-container']}>
        <h1>Check Yourself</h1>
        <table className={styles['form-table']}>
          <tbody>
            <tr>
              <td><label>Username:</label></td>
              <td><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Age:</label></td>
              <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Gender:</label></td>
              <td><input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Description:</label></td>
              <td><textarea value={description} onChange={(e) => setDescription(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2 className={styles['chec']}>Choose The symptoms</h2>
        <label>
          <div className={styles['checkbox-container']}>
            {diseases.flatMap((disease, index) =>
              disease.symptoms.map((symptom, symptomIndex) => (
                <label key={`${index}-${symptomIndex}`} className={styles['checkbox']}>
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleCheckboxChange(symptom)}
                  />
                  {symptom}
                </label>
              ))
            )}
          </div>
        </label>
        <br />
        <button className={styles['submit-button']} onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <div className={styles['result-container']}>
          <h3>Disease: {result}</h3>
        </div>
        <div className={styles['doc']}>
          <h3>Suggested Doctors:</h3>
          <ul className={styles['dct']}>
            {Array.isArray(suggestedDoctors) ? (
              suggestedDoctors.map((doctor, index) => (
                <li key={index}>
                  <div>Name: {doctor.dname}</div>
                  <div>Email: {doctor.email}</div>
                  <div>Phone: {doctor.phone}</div>
                  <div>Speciality: {doctor.speciality}</div>
                </li>
              ))
            ) : (
              <li>No suggested doctors found</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CheckYourselfPage;
