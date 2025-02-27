import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const getWebBanner = async () => {
  try {
    const response = await axios.get(`${API_URL}/recruiting/web/banner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
}

export const getMobBanner = async () => {
  try {
    const response = await axios.get(`${API_URL}/recruiting/mobile/banner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
}

export const getProjectWebData = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAllProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/all?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getWebProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/web?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAppProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/app?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getProjectMobData = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/mobile/${projectId}`); //env에 넣기
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAllProjectList_Mob = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/mobile/projects/all?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getWebProjectList_Mob = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/mobile/projects/web?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAppProjectList_Mob = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/mobile/projects/app?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};